import Header from '../components/Header'
import Navbar from '../components/Navbar'
// import React, { useState } from 'react';
import '../styles/globals.css'
import { useState, useEffect } from 'react';
import Head from "next/head";
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }) {

  const [showRoleSelector, setShowRoleSelector] = useState(false)
  const [role, setRole] = useState([null, null])
  
  useEffect(() => {
    // console.log(localStorage)
    localStorage.getItem('role') ? setRole([localStorage.getItem('role'), localStorage.getItem('role-title')]) : setRole([null, null])
    localStorage.getItem('role') ? setShowRoleSelector(false) : setShowRoleSelector(true)
    // console.log(role)
    }, [])
  
  return (
    <div>
      <Meta/>
      <Header setShowRoleSelector={setShowRoleSelector} role={role} setRole={setRole}/>
      {/* <Navbar /> */}
      <main className="mx-auto pt-24 sm:px-10 bg-slate-200 overflow-auto h-screen">
        <Component {...pageProps} showRoleSelector={showRoleSelector} setShowRoleSelector={setShowRoleSelector} role={role} setRole={setRole}/>
      </main>
    </div>
  )
  
}

export default MyApp

