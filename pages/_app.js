import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Navbar from '../components/Navbar'
// import React, { useState } from 'react';
import '../styles/globals.css'
import { useState, useEffect } from 'react';
import Head from "next/head";
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }) {

  const [showRoleSelector, setShowRoleSelector] = useState(false)
  const [role, setRole] = useState([null, null])

  const [search, setSearch] = useState('')


  useEffect(() => {
    // console.log(localStorage)
    localStorage.getItem('role') ? setRole([localStorage.getItem('role'), localStorage.getItem('role-title')]) : setRole([null, null])
    localStorage.getItem('role') ? setShowRoleSelector(false) : setShowRoleSelector(true)
    // console.log(role)
  }, [])

  return (
    <div>
      <Meta />
      <div className='min-h-screen flex flex-col overflow-hidden'>
        {/* <Header setShowRoleSelector={setShowRoleSelector} role={role} setRole={setRole} setSearch={setSearch}/> */}
        {/* <Nav /> */}
        <Navbar setShowRoleSelector={setShowRoleSelector} role={role} setRole={setRole} setSearch={setSearch}/>

        <main className="pt-2 md:pt-4 sm:px-10 bg-slate-200 overflow-y-auto  flex flex-grow flex-col justify-between z-10 h-0">
          {/* Decided to implement Announcements for Index only
          <Announcement Announcement_Title={"Welcome to the new MyECR"} Announcement_Body={"We are still working on migrating the following apps: Google, GoTo, Kelly, McGraw Hill, Naviance, Netsuite, Paycom"} /> */}
          <Component {...pageProps} showRoleSelector={showRoleSelector} setShowRoleSelector={setShowRoleSelector} role={role} setRole={setRole} search={search} className="mb-auto" />
          <Footer />
        </main>

      </div>
    </div>
  )

}

export default MyApp

