import { useState } from 'react'
import {useForm} from 'react-hook-form'

import './App.css'

function App() {
  const{
    register,
    handleSubmit,
    watch,
    formState:{errors},
  }=useForm();


  const onSubmit=(data)=> console.log(data)
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username'{...register("username",{required: true,minLength:{value:4,message:"the length of the username should be atleast 4 characters"},maxLength:{value:12,message:"the maximum length of the password should be 12"}})}type="text" />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password")}type="password"  />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App
