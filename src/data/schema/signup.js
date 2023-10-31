import  * as yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const userSchema = yup.object().shape({
    name:yup.string().required('This field is Required'),
    userName:yup.string().required('User Name Is Required'),
    email:yup.string().email('Please Provide A valid Email Address').required('Email is Required'),
    password:yup.string().min(4,'Passwor must be at least 4 characters').max(10,'Password must be at most 10 character').required('This field is Required'),
    confirmpassword:yup.string().oneOf([yup.ref('password')],`Password don't match`).required('this fiel is Required'),
    phone:yup.string().matches(phoneRegExp, 'Phone number is not valid')
})