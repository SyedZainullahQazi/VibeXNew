import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

function App() {
  const [dataD, setData] = useState(null);
  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER)
      .then(response => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Handle the data from the API
        setData(data);
        console.log(data);
        console.log(import.meta.env.VITE_SERVER)
      })
      .catch(error => {
        // Handle errors during the fetch
        console.error('Error during fetch operation:', error);
      });
  }, [])

  return (
    <>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const decoded=jwtDecode(credentialResponse?.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
    </>
  )
}

export default App
