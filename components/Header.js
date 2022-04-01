import Link from 'next/link';
import Search from './Search';
import { useRouter } from "next/router";

export default function Header({ setShowRoleSelector, role, setRole, setSearch }) {
    // Show role selector button only on homepage
    // https://stackoverflow.com/questions/67663919/how-to-hide-header-only-at-one-page-in-nextjs-app
    const router = useRouter();
    const showHomepageActions = router.pathname !== "/" ? false : true;
    // console.log("show role selector btn", showHomepageActions)

    return (
        <>
            {/* <nav className='bg-sky-800 sticky top-0 left-0 z-50 w-full'>
                <div className="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" id="headlessui-disclosure-button-2" type="button" aria-expanded="false"><span class="sr-only">Open main menu</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="block h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div>
                </div>
            </nav> */}
            <header>
                <div className='header sticky top-0 left-0 z-50 h-14 w-full'>
                    {/* <div className='header fixed top-0 z-40 w-full backdrop-blur max-w-8xl mx-auto'> */}
                    <div className='flex gap-4 container mx-auto'>
                        <div className='flex-none'>
                            <h1>myECR</h1>
                        </div>
                        <div className='grow flex justify-center'>
                            <Link href='/'><a className="px-2">Dashboard</a></Link>
                            <Link href='/calendar'><a className="px-2">Calendar</a></Link>
                        </div>
                        {
                            role[0] && showHomepageActions &&
                            <div className='flex grow flex-none'>
                                <Search setSearch={setSearch} />
                            </div>
                        }
                        {
                            role[0] && showHomepageActions &&
                            <div className='flex flex-none items-end'>
                                {/* <Link href='http://ecrchs.instructure.com/login/saml'><a className="px-2">Canvas</a></Link>
                        <Link href='http://elcaminoreal.aeries.net'><a className="px-2">Aeries</a></Link>
                        <Link href='http://mail.ecrchs.net'><a className="px-2">ECR Mail</a></Link>
                        <Link href='http://ecrchs.net'><a className="px-2">ecrchs.net</a></Link> */}
                                <p>{role ? role[1] : ''}</p>
                                <button className="px-2" onClick={() => { localStorage.removeItem('role'); setRole([null, null]); setShowRoleSelector(true); }}>CHANGE ROLE</button>
                            </div>
                        }
                    </div>
                </div>
            </header>
        </>

    )

}