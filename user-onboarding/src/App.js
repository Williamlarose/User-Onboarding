import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Form from './Form'
const initialFormValues = { Name: "", Email: "", Password: "", TermOfService: false }
const initialErrors = {
  Name: "", Email: "", Password: "",
}
const initialUser = []
const initialDisabled = true

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  function change(event) {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }
  const submit = (event) => {
    event.preventDefault()
    const newUser = {
      Name: formValues.Name.trim(),
      Email: formValues.Email.trim(),
      Password: formValues.Password.trim()

    }
    setFormValues([...formValues, newUser])
    setFormValues(initialFormValues)
  }


  return (
    <div className="App">
      <Form

      />

    </div>
  );
}

export default App;
