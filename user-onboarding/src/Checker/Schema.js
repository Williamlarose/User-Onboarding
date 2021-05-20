import * as yup from 'yup'

const formSchema = yup.object().shape({
    Name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 characters long'),
    Email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    Password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(3, 'Password must be 3 characters long'),

    TermOfService: yup.boolean(),

})

export default formSchema