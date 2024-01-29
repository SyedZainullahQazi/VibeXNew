import React from 'react'
import {GoogleLogin} from 'react-google-login';

function Logout() {
  return (
    <div id="signInButton">
        <GoogleLogin
            clientId={process.env.VITE_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFaliure={onFaliure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div>
  )
}

export default Logout