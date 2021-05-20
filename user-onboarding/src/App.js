
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './Checker/Schema'
const initialFormValues = { Name: "", Email: "", Password: "", TermOfService: false }
const initialErrors = {
  Name: "", Email: "", Password: "",
}
const initialUser = []
const initialDisabled = true

function App() {
  const [Oguser, setOguser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  function getUser() {
    axios.get(`https://reqres.in/api/users`)
      .then(yo => {
        setOguser(yo.data)
      })
  }
  function Postuser(newuser) {
    axios.post(`https://reqres.in/api/users`, newuser)
      .then(yo => {
        setOguser([yo.data, ...initialUser])
      }).catch()
      .finally(setFormValues(initialFormValues))
  }
  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  function change(name, value) {

    setFormValues({ ...formValues, [name]: value })
  }
  const submit = (event) => {

    const newUser = {
      Name: formValues.Name.trim(),
      Email: formValues.Email.trim(),
      Password: formValues.Password.trim()

    }

    Postuser(newUser)
  }
  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form
        values={formValues}
        change={change}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

    </div>
  );
}

export default App;
