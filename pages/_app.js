import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Navbar from '../components/Navbar'
// import React, { useState } from 'react';
import '../styles/globals.css'
import { useState, useEffect } from 'react';
import Head from "next/head";
import Meta from '../components/Meta'
import NextNProgress from "nextjs-progressbar";

// For authentication
import { SessionProvider } from "next-auth/react"

// function MyApp({ Component, pageProps }) {
function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  const [showRoleSelector, setShowRoleSelector] = useState(false)
  const [role, setRole] = useState([null, null, null, null])

  const [search, setSearch] = useState('')

  const [compactmode, setCompactmode] = useState(false)


  useEffect(() => {
    // console.log(localStorage)
    localStorage.getItem('role')
      ? setRole([localStorage.getItem('role'),
      localStorage.getItem('role-title'),
      localStorage.getItem('role-signin') == 'true',
      localStorage.getItem('role-emailRegex'),
      ])
      : setRole([null, null, null, null])

    localStorage.getItem('role') ? setShowRoleSelector(false) : setShowRoleSelector(true)
    // console.log(role)
    localStorage.getItem('compactmode') ? setCompactmode(localStorage.getItem('compactmode') == 'true') : setCompactmode(false)
  }, [])

  return (
    <SessionProvider session={session}>
      <div>
        <NextNProgress color="#e2e8f0" />
        <Meta />
        <div className='min-h-screen flex flex-col overflow-hidden'>
          {/* <Header setShowRoleSelector={setShowRoleSelector} role={role} setRole={setRole} setSearch={setSearch}/> */}
          {/* <Nav /> */}
          <Navbar setShowRoleSelector={setShowRoleSelector} role={role} setRole={setRole} setSearch={setSearch} compactmode={compactmode} setCompactmode={setCompactmode} />

          <main className="pt-2 md:pt-4 sm:px-10 bg-slate-200 overflow-y-auto  flex flex-grow flex-col justify-between z-10 h-0">
            {/* Decided to implement Announcements for Index only
            <Announcement Announcement_Title={"Welcome to the new MyECR"} Announcement_Body={"We are still working on migrating the following apps: Google, GoTo, Kelly, McGraw Hill, Naviance, Netsuite, Paycom"} /> */}
            <Component {...pageProps} showRoleSelector={showRoleSelector} setShowRoleSelector={setShowRoleSelector}
              role={role} setRole={setRole} search={search} compactmode={compactmode} className="mb-auto" />
            <Footer />
          </main>

        </div>
      </div>
    </SessionProvider>
  )

}

export default MyApp

