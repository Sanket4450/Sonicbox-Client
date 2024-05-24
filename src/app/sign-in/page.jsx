'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import { loginSchema } from '@/schemas'
import { BasicTextField, PasswordField } from '../components/common'

export default () => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values)
      },
    })

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
        <BasicTextField
          label="Email"
          name={'email'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && errors.email ? errors.email : ''}
          width={'85vw'}
        />
        <PasswordField
          label="Password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={touched.password && errors.password ? errors.password : ''}
          width="85vw"
        />
        <button
          type="submit"
          className="bg-secondary text-theme-white hover:bg-theme-light-purple font-semibold rounded-md w-[85vw] max-w-[450px] py-2 my-14 transition duration-200">
          Sign in
        </button>
      </form>
      <div className=' text-far-gray font-semibold text-center'>Don't have an account? <Link href={'/sign-up'} className=' text-theme-purple font-bold'>Sign Up</Link></div>
    </div>
  )
}
