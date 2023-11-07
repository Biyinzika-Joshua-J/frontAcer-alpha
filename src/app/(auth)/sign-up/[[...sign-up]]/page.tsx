import React from 'react'
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <SignUp afterSignUpUrl={'http://localhost:3000/learn'}/>
  )
}

export default SignUpPage