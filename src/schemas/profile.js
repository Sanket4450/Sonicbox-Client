import * as Yup from 'yup'

export const profileSchema = Yup.object({
  name: Yup.string().required('Please Enter Display Name'),
  username: Yup.string()
    .min(8, 'Username must be at least 8 characters long')
    .required('Please Enter Your Username'),
  gender: Yup.string(),
  state: Yup.string(),
  country: Yup.string(),
})
