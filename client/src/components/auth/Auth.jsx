import { useState, useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { Button } from "@/shadcn-components/ui/button"
import { jwtDecode } from 'jwt-decode';
import ImageSlider from '../ImageSlider/ImageSlider';
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Logo from '../../assets/ImageSlider/vibex.png'




function Auth() {
  const leftColStyle = {padding: 0,margin: 0,border: 'none',};
  const onLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log(decoded);
  }
  return (
    <>
      <Container fluid>
        <ToastContainer />
        <Row>
      

          {/* Right Side */}
          <Col xs={12} lg={6}>
            <div className="text-center d-flex flex-column align-items-center justify-content-center mt-20">
              <img
                src={Logo}
                alt="VibeX - Social Suite"
                className="logo-placeholder"
                width={"35%"}
                height={"35%"}
              />

              <p className={`text-3xl font-bold	font-serif  mt-1 ml-3`}>Vibe X</p>
              <p className={`font-sans ml-3`}>University Social Suite</p>

              <p className={`text-2xl font-bold	  mt-4 ml-3`}>Student Login OR Register</p>
              {/* Signup with Google Button */}
              <div className='mt-2 flex items-center justify-center'>
              <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              </div>

              <p className="mt-3">Are You Alumnus?</p>
              <Button className="bg-zinc-950 dark:bg-white text-white mt-1">Alumni Register</Button>
            </div>
            
          </Col>
          <Col lg={6} className=" d-none d-lg-block" style={leftColStyle}>
            <ImageSlider />
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Auth;

