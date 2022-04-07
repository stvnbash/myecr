import Category from '../components/Category.js';
import CategorySelector from '../components/CategorySelector.js';
import RoleSelector from '../components/RoleSelector.js';
import { useState, useEffect } from 'react';
import Meta from '../components/Meta'
import Alert from '../components/Alert.js';
import AlertSelector from '../components/AlertSelector.js';

import { useSession, signIn, signOut } from "next-auth/react"


export default function Home({ roles, categories, cards, showRoleSelector, setShowRoleSelector, role, setRole, search, alerts }) {

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

  const { data: session } = useSession()
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
          ? <CategorySelector categories={categories} cards={cards} role={role} search={search} />
          : <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-white px-16 py-14 rounded-3xl text-center m-4 overflow-y-clip">
              <h1 className="text-2xl mb-4 font-bold">SIGN IN TO VIEW AS {role[1].toUpperCase()}</h1>
              <div>
                {/* <a className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"> */}
                <a className="grid grid-cols-1 gap-4">
                  {
                    !session && <div className='border-0 border-t-2 border-black py-4'>
                      <button
                        className="px-4 py-2 font-semibold text-md bg-blue-800 text-white rounded-full shadow-sm hover:shadow-lg hover:font-bold hover:underline hover:underline-offset-2 w-60"
                        onClick={() => { signIn("azure-ad"); }
                        }>
                        Sign in to myECR
                      </button>
                    </div>
                  }
                </a>
              </div>
            </div>
          </div>
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