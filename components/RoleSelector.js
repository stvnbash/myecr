import Link from 'next/link';
import RoleSelectorButton from './RoleSelectorButton';
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { motion } from "framer-motion";



export default function RoleSelector({ roles, showRoleSelector, setShowRoleSelector, setRole }) {
    const { data: session, status } = useSession()

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };



    // loop over items of prop to get them into template
    // https://flaviocopes.com/react-how-to-loop/

    // Sort items of prop
    // https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/

    // const [showRoleSelector, setShowRoleSelector] = useState(true)

    // useEffect(() => {
    //     localStorage.getItem('role') === null ? setShowRoleSelector(true) : setShowRoleSelector(false)
    //   }, [])

    const items = []
    roles.sort((a, b) => (a.id > b.id) ? 1 : -1)


    for (let role of roles) {
        items.push(<RoleSelectorButton title={role.title} oid={role.oid} signin={role.signin} emailRegex={role.emailRegex} setShowRoleSelector={setShowRoleSelector} key={role.id} setRole={setRole} />)
    }




    // let userRole = localStorage.getItem("userRole")
    // const roleSelector = document.querySelector("#roleSelector")

    // const 

    // roleSelector.addEventListener("click", () => {
    //     roleSelector.classList.toggle("hidden")
    // })

    // onsubmit={localStorage.setItem("userRole", document.getElementById("userRole").value)}
    // onsubmit={console.log(localStorage["userRole"].value)}

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const item = localStorage.getItem('key')
    }


    return (
        // id="roleSelector" action="" onchange="this.form.submit()"
        showRoleSelector
            ? <>
                <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                    { status !== 'loading' &&
                    <motion.div initial="hidden" animate="visible" variants={item} className="bg-white px-16 py-14 rounded-3xl text-center m-4 overflow-y-clip">
                        <h1 className="text-4xl mb-4 font-bold">Welcome to MyECR</h1>
                        <h1 className="text-2xl mb-4 font-bold">PLEASE SELECT YOUR ROLE</h1>
                        <div>
                            {/* <a className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"> */}
                            {/* <a className="grid grid-cols-1 gap-4 mt-10"> */}
                            <a className="grid grid-cols-1 gap-4">
                                {items}
                                {
                                    !session && <div className='border-0 border-t-2 border-black py-4'>
                                        <h1 className="text-xl mb-4 font-bold">EMPLOYEES, SIGN IN HERE</h1>

                                        <button
                                            className="px-4 py-2 font-semibold text-md bg-blue-800 text-white rounded-full shadow-sm hover:shadow-lg hover:font-bold hover:underline hover:underline-offset-2 w-60"
                                            onClick={() => { signIn("azure-ad"); }
                                            }>
                                            Sign in to MyECR
                                        </button>
                                    </div>
                                }
                            </a>
                        </div>
                    </motion.div>
                    }
                </div>
            </>
            : <></>
    )

}