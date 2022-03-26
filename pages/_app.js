import Header from '../components/Header'
import Navbar from '../components/Navbar'
// import React, { useState } from 'react';
import '../styles/globals.css'
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const [showRoleSelector, setShowRoleSelector] = useState(true)

  useEffect(() => {
      localStorage.getItem('role') ? setShowRoleSelector(false) : setShowRoleSelector(true)
    }, [])
  
  return (
    <>
      <Header setShowRoleSelector={setShowRoleSelector}/>
      {/* <Navbar /> */}
      <main className="container1 mx-auto container">
        <Component {...pageProps} showRoleSelector={showRoleSelector} setShowRoleSelector={setShowRoleSelector} />
      </main>
    </>
  )
  
}

export default MyApp

