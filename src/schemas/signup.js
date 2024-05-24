import * as Yup from 'yup'

export const signupSchema = Yup.object({
  email: Yup.string()
    .email('Please Enter a valid Email')
    .required('Please Enter Your Email'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Please Enter Your Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please Confirm Your Password'),
})
