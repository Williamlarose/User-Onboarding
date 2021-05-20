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
        submit()
    }
    <div>
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.PasswordTermOfService}</div>
        <div>{errors.TermOfService}</div>
    </div>

    function onChange(event) {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='Name'
                onChange={onChange}
                value={values.Name}
            />
            <input
                type='text'
                name='Email'
                onChange={onChange}
                value={values.Email}
            />
            <input
                type='text'
                name='Password'
                onChange={onChange}
                value={values.Password}
            />

            <div>
                <label>TermOfService
                <input
                        type='checkbox'
                        name='Terms'
                        checked={values.TermOfService}
                        onChange={onChange} /> </label> </div>
            <button disabled={disabled}>submit</button>
        </form >
    )
}