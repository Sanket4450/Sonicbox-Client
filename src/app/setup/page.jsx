'use client'

import { useRef, useState } from 'react'
import { useFormik } from 'formik'
import { profileSchema } from '@/schemas'
import { BasicTextField, SelectField, FileField } from '../components/common'
import avaterImage from '@/assets/images/avatar_profile.jpeg'

export default () => {
  const profileImageRef = useRef(null)
  const [profileImage, setProfileImage] = useState(null)
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: '',
        username: '',
        gender: 'male',
        state: '',
        country: '',
      },
      validationSchema: profileSchema,
      onSubmit: (values) => {
        console.log(values)
      },
    })

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0])
  }

  const handleFileClick = () => {
    profileImageRef.current.click()
  }

  const genders = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ]

  return (
    <div>
      <div className=" my-16 space-y-2">
        <h1 className=" text-primary text-4xl font-bold text-center">
          SonicBox
        </h1>
        <p className=" text-primary text-sm text-center">
          Listen your favourite songs only on SonicBox.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center">
        <FileField
          id="profile-image"
          label=""
          name="profileImage"
          ref={profileImageRef}
          handleFileChange={handleFileChange}
          handleFileClick={handleFileClick}
          image={profileImage ? URL.createObjectURL(profileImage) : avaterImage}
        />
        <BasicTextField
          id="name"
          label="Display Name"
          name={'name'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          error={touched.name && errors.name ? errors.name : ''}
          width={'85vw'}
        />
        <BasicTextField
          id="username"
          label="Username"
          name={'username'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          error={touched.username && errors.username ? errors.username : ''}
          width={'85vw'}
        />
        <SelectField
          id="gender"
          data={genders}
          label="Gender"
          name={'gender'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.gender}
          error={touched.gender && errors.gender ? errors.gender : ''}
          width={'85vw'}
        />
        <BasicTextField
          id="state"
          label="State"
          name={'state'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.state}
          error={touched.state && errors.state ? errors.state : ''}
          width={'85vw'}
        />
        <BasicTextField
          id="country"
          label="Country"
          name={'country'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.country}
          error={touched.country && errors.country ? errors.country : ''}
          width={'85vw'}
        />
        <button
          type="submit"
          className="bg-secondary text-theme-white hover:bg-theme-light-purple font-semibold rounded-md w-[85vw] max-w-[450px] py-2 my-14 transition duration-200">
          Setup Account
        </button>
      </form>
    </div>
  )
}
