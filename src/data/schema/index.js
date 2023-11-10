import  * as yup from 'yup'
export const userSchema = yup.object().shape({
    name:yup.string().required('Name Is Required'),
    username:yup.string().required('Username Is Required'),
    email:yup.string().email('Please Provide A valid Email Address').required('Email is Required'),
    password:yup.string().min(4,'Passwor must be at least 4 characters').max(10,'Password must be at most 10 character').required('This field is Required'),
    city:yup.string().required('City is Required'),
    confirmpassword:yup.string().oneOf([yup.ref('password')],`Password don't match`).required('this fiel is Required'),
})