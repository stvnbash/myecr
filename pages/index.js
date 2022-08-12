import Category from '../components/Category.js';
import CategorySelector from '../components/CategorySelector.js';
import RoleSelector from '../components/RoleSelector.js';
import { useState, useEffect } from 'react';
import Meta from '../components/Meta'
import Alert from '../components/Alert.js';
import AlertSelector from '../components/AlertSelector.js';

import { useSession, signIn, signOut } from "next-auth/react"
import AuthPrompt from '../components/AuthPrompt.js';


export default function Home({ roles, categories, cards, showRoleSelector, setShowRoleSelector, role, setRole, search, alerts, compactmode }) {
  // const [role, setRole] = useState(null)

  // // https://developer.school/snippets/react/localstorage-is-not-defined-nextjs#why-does-this-happen
  // useEffect(() => {
  //   localStorage.getItem('role') ? setRole(localStorage.getItem('role')) : setRole(null)
  //   console.log(localStorage)
  //   // localStorage.setItem('role', "STU")
  //   // console.log(localStorage)


  //   // if (typeof window !== 'undefined') {
  //   //   console.log('You are on the browser')
  //   //   // 👉️ can use localStorage here
  //   // } else {
  //   //   console.log('You are on the server')
  //   //   // 👉️ can't use localStorage
  //   // }
  // }, [])

  const { data: session, status } = useSession()
  // if (session) { 
  //   console.log(session)
  //   return (
  //     <div>
  //       Signed in as {session.user.email} <br />
  //       <img src={session.user.image} alt={session.user.name} />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </div>
  //   )
  // }
  // return (
  //   <div>
  //     Not signed in <br />
  //     <button onClick={() => signIn("azure-ad")}>Sign in</button>
  //   </div>
  // )

  /* Note about Role
  setRole([oid, title, signin, emailRegex]);
  role[0] = oid = "STU", "TCH", etc...
  role[1] = title = "Student", "Teacher", etc...
  role[2] = signin = true, false
  role[3] = emailRegex = string for email pattern for authentication
  */

  // Clear role if saved role is staff and user logs in as student
  useEffect(() => {
    if (status !== 'loading' && (role[2] && session) && !RegExp(role[3]).test(session.user.email)) {
      localStorage.removeItem('role'); setRole([null, null, null, null]); setShowRoleSelector(true);
    }
  }, [session, status, role, setRole, setShowRoleSelector])

  return (

    <div>
      <Meta title="Apps" />

      {/* {role === null ? <RoleSelector roles={roles} /> : <></>} */}
      {
        (!role[2] || (role[2] && session)) &&
        <AlertSelector alerts={alerts} role={role} />

      }

      <RoleSelector roles={roles} showRoleSelector={showRoleSelector} setShowRoleSelector={setShowRoleSelector} setRole={setRole} />
      {/* {
        session
        ? <div className="flex w-full">
            <p>{`Good morning ${session.user.name}`}</p>
            <button onClick={() => {signOut(); localStorage.removeItem('role'); setRole([null, null, null, null]); setShowRoleSelector(true);}}>Sign out</button>
          </div>
        : ''
      } */}
      {
        !role[2] || (role[2] && session)
          ? <CategorySelector categories={categories} cards={cards} role={role} search={search} compactmode={compactmode} />
          : status === "unauthenticated" && <AuthPrompt role={role} />
      }
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      {/* <div class="flex flex-wrap w-full "> */}
      {/* <div class="grid gap-4 grid-flow-col auto-cols-max w-full"> */}
      {/* <div class="flex flex-wrap gap-4 overflow-hidden"> */}
      {/* {console.log(tiles)} */}
    </div>
  )
}


// Data
export async function getStaticProps() {
  const { roles, categories, alerts, cards } = await import('../db.json');


  return {
    props: {
      roles,
      categories,
      alerts,
      cards
    }
  }
}