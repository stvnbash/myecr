import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function ({ title, oid, setShowRoleSelector }) {
    // onclick={localStorage.setItem('userRole', oid)}

    // const setUserRole = async () => {

    // }

    // const [role, setRole] = useState(null)

    // useEffect(() => {
    //     // localStorage.setItem('role', oid)
    //     console.log(localStorage)
    //     // console.log(localStorage.length)
    //     if (typeof window !== 'undefined') {
    //         console.log('You are on the browser')
    //         // 👉️ can use localStorage here
    //     } else {
    //         console.log('You are on the server')
    //         // 👉️ can't use localStorage
    //     }
    // }, [])


    return (
        <>
            <button
                className="px-4 py-2 font-semibold text-sm bg-blue-800 text-white rounded-full shadow-sm hover:shadow-lg hover:font-bold w-60"
                // name="userRole"
                // id="userRole"
                // value={oid}
                onClick={() => {localStorage.setItem('role', oid); console.log(localStorage); setShowRoleSelector(false)}}>
                {title}
            </button>
        </>
    )

}