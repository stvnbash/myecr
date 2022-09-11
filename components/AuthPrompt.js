import Link from 'next/link';
import RoleSelectorButton from './RoleSelectorButton';
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { motion } from "framer-motion";



export default function AuthPrompt({ role }) {
    const { data: session, status } = useSession()

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };


    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <motion.div initial="hidden" animate="visible" variants={item} className="bg-white px-16 py-14 rounded-3xl text-center m-4 overflow-y-clip">
                <h1 className="text-2xl mb-4 font-bold">SIGN IN TO VIEW AS {role[1].toUpperCase()}</h1>
                <div>
                    {/* <a className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"> */}
                    <a className="grid grid-cols-1 gap-4">
                        {
                            !session && <div className='border-0 border-t-2 border-black py-4'>
                                <button
                                    // className="px-4 py-2 font-semibold text-md bg-blue-800 text-white rounded-full shadow-sm hover:shadow-lg hover:font-bold hover:underline hover:underline-offset-2 w-60"
                                    className="px-4 py-2 font-semibold text-md bg-ecrDarkBlue text-white rounded-full shadow-sm hover:shadow-lg hover:font-bold hover:underline hover:underline-offset-2 w-60"
                                    onClick={() => { signIn("azure-ad"); }
                                    }>
                                    Sign in to MyECR
                                </button>
                            </div>
                        }
                    </a>
                </div>
            </motion.div>
        </div>
    )

}