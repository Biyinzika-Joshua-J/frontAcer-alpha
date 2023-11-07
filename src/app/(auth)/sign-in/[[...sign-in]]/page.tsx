import React from 'react'
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <SignIn afterSignInUrl={'http://localhost:3000/learn'}/>
  )
}

export default SignInPage