import Link from 'next/link';

export default function Header({ setShowRoleSelector, role, setRole }) {
    return (
        <header>
            <div className='header fixed top-0 left-0 z-50 h-14 w-full '>
                {/* <div className='header fixed top-0 z-40 w-full backdrop-blur max-w-8xl mx-auto'> */}
                <div className='flex gap-4 container mx-auto'>
                    <div className='flex-none'>
                        <h1>myECR</h1>
                    </div>
                    <div className='grow flex justify-center'>
                        <Link href='/'><a className="px-2">Dashboard</a></Link>
                        <Link href='/calendar'><a className="px-2">Calendar</a></Link>
                    </div>
                    <div className='flex flex-none items-end'>
                        {/* <Link href='http://ecrchs.instructure.com/login/saml'><a className="px-2">Canvas</a></Link>
                    <Link href='http://elcaminoreal.aeries.net'><a className="px-2">Aeries</a></Link>
                    <Link href='http://mail.ecrchs.net'><a className="px-2">ECR Mail</a></Link>
                    <Link href='http://ecrchs.net'><a className="px-2">ecrchs.net</a></Link> */}
                        <p>{role ? role[1] : ''}</p>
                        <button className="px-2" onClick={() => { localStorage.removeItem('role'); setRole([null, null]); setShowRoleSelector(true); }}>CHANGE ROLE</button>
                    </div>
                </div>
            </div>
        </header>
    )

}