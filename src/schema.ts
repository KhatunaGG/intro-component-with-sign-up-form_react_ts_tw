import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup.string().required('First Name cannot be empty').matches(/^[a-zA-Z]+$/, 'Letters only'),
    lastName: yup.string().required('Last First Name cannot be empty').matches(/^[a-zA-Z]+$/, 'Letters only'),
    email: yup.string().required('Email cannot be empty').email('Looks like this is not an email').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
    password: yup.string().required('Password cannot be empty').min(8, 'min 8 characters').max(15, 'max 15 characters').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Must contain numbers, symbols, letters, cap. letters')

})