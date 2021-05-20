import React from 'react'

export default function Userform(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props
    function onSubmit(event) {
        event.preventDefault()
    }

    function onChange(event) {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='Name'
                onChange={change}
                value={values.Name}
            />
            <input
                type='text'
                name='Email'
                onChange={change}
                value={values.Email}
            />
            <button>Submit</button>
        </form>
    )
}