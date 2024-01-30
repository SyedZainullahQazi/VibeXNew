import { useState, useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

function Auth() {
    const onLoginSuccess=(credentialResponse)=>{
        const decoded=jwtDecode(credentialResponse?.credential);
        console.log(decoded);
    }
  return (
    <>
      <GoogleLogin
        onSuccess={onLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
    </>
  )
}

export default Auth