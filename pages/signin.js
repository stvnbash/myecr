import Meta from '../components/Meta'
import Router, { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState, useEffect } from 'react';

// import Script from 'next/script'

export default function Home() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status !== 'loading') {
            session ? router.push('/') : signIn("azure-ad")
        }
    }, [session, status])

    return (
        <>
            <Meta title="Sign In" />

            <div className="m-auto text-ecrDarkBlue">
                <p className='text-4xl mb-4 font-bold text-center'>MyECR is loading</p>
                <p className='text-base font-semibold'>Is this page frozen?</p>
                <p className='text-base font-semibold'>Click <span className='font-bold'>&quot;Home&quot;</span> at the top to proceed.</p>
            </div>
        </>
    )
}
