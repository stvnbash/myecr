import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className='header'>
                <h1>myECR</h1>
                <div>
                    <Link href='http://ecrchs.instructure.com/login/saml'><a className="px-2">Canvas</a></Link>
                    <Link href='http://elcaminoreal.aeries.net'><a className="px-2">Aeries</a></Link>
                    <Link href='http://mail.ecrchs.net'><a className="px-2">ECR Mail</a></Link>
                    <Link href='http://ecrchs.net'><a className="px-2">ecrchs.net</a></Link>
                </div>
            </div>
        </header>
    )

}