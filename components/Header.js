import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className='container'>
                <Link href='/' passHref>
                    <h2>Dev Blog</h2>
                </Link>
                <Link href='/about'><a className='btn btn-back'>About</a></Link>
            </div>
        </header>
    )

}