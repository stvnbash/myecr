import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ViewGridIcon, TableIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useRouter } from "next/router";
import Search from './Search';
import { useSession, signIn, signOut } from "next-auth/react"


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
]

const logo = {
  img: "./logo/myECR v2 (white) centered.png",
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar({ setShowRoleSelector, role, setRole, setSearch, compactmode, setCompactmode }) {
  const router = useRouter();
  const onIndexPage = router.pathname !== "/" ? false : true;
  const { data: session, status } = useSession()


  useEffect(() => {
    !( role[0] && onIndexPage && ((role[2] && session) || !role[2]) ) && setSearch('')
  }, [role, onIndexPage, session, setSearch])

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 left-0 z-50 w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href='/'><a><img
                    className="block lg:hidden h-16 w-auto ml-6 sm:ml-0 pointer-events-none"
                    src={logo.img}
                    alt="myECR"
                  /></a></Link>
                  <Link href='/'><a><img
                    className="hidden lg:block h-16 w-auto pointer-events-none"
                    src={logo.img}
                    alt="myECR"
                  /></a></Link>
                </div>
                <div className="hidden sm:block sm:ml-6 my-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}><a
                        
                        
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a></Link>
                    ))}
                  </div>
                </div>
                  {
                    role[0] && onIndexPage && ((role[2] && session) || !role[2])
                    && <div className='sm:grow flex sm:block ml-6 my-auto'>
                        <Search setSearch={setSearch} key="search-desktop"/>
                    </div>
                    // : setSearch('')
                  }
              </div>
              <div className="sticky inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {
                role[0] && onIndexPage && ((role[2] && session) || !role[2]) &&
                <div className='sm:flex sm:flex-col hidden'>
                    <p className='text-white px-3 pt-2 rounded-md text-sm font-medium mx-auto'>View</p>
                    {compactmode && <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { localStorage.setItem('compactmode', false); setCompactmode(false); }}><ViewGridIcon className="mx-auto block h-5 w-5" aria-hidden="true" /></button>}
                    {!compactmode && <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { localStorage.setItem('compactmode', true); setCompactmode(true); }}><TableIcon className="mx-auto block h-5 w-5" aria-hidden="true" /></button>}
                </div>
              }
              {
                role[0] && onIndexPage &&
                <div className='sm:flex sm:flex-col hidden'>
                    <p className='text-white px-3 pt-2 rounded-md text-sm font-medium mx-auto'>{role ? role[1].toUpperCase() : ''}</p>
                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { localStorage.removeItem('role'); setRole([null, null, null, null]); setShowRoleSelector(true); }}>change role</button>
                </div>
              }
              {
                session
                ? <div className='sm:flex sm:flex-col hidden'>
                    <p className='text-white px-3 pt-2 rounded-md text-sm font-medium mx-auto'>{session.user.name}</p>
                    {/* this option signs you out of the app, but not out of the Microsoft IDP.  With {redirect: false}, the page does not reload on sign out
                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { signOut({redirect: false}); }}>sign out</button> */}
                    {/* This option signs you out of the app and out of the Microsoft IDP, but the user sees a flash of the sign in button before they are redirected to sign out of the Microsoft IDP
                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={async() => { await signOut({redirect: false}).then(router.push(`https://login.microsoftonline.com/3103011a-6832-4e4a-be24-2aac2968b4dc/oauth2/logout?post_logout_redirect_uri=${encodeURIComponent(window.location.href)}`)); }}>sign out</button> */}
                    {/* This option signs you out of the app and out of the Microsoft IDP, but a custom configuration of callbackUrl to allow for URLs on different sites was required */}
                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { signOut({callbackUrl: `https://login.microsoftonline.com/3103011a-6832-4e4a-be24-2aac2968b4dc/oauth2/logout?post_logout_redirect_uri=${encodeURIComponent(window.location.href)}`}); }}>sign out</button>
                </div>
                : status === "unauthenticated" && <div className='sm:flex sm:flex-row hidden'>
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { signIn("azure-ad"); }}>sign in</button>
                </div>
              }
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {/* <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex place-content-center">
            {
              role[0] && onIndexPage &&
              <div className='flex flex-col px-2'>
                  <p className='text-white px-3 pt-2 rounded-md text-sm font-medium mx-auto'>{role ? role[1].toUpperCase() : ''}</p>
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { localStorage.removeItem('role'); setRole([null, null, null, null]); setShowRoleSelector(true); }}>change role</button>
              </div>
            }
            {
              session
              ? <div className='flex flex-col px-2'>
                  <p className='text-white px-3 pt-2 rounded-md text-sm font-medium mx-auto'>{session.user.name}</p>
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { signOut({callbackUrl: `https://login.microsoftonline.com/3103011a-6832-4e4a-be24-2aac2968b4dc/oauth2/logout?post_logout_redirect_uri=${encodeURIComponent(window.location.href)}`}); }}>sign out</button>
              </div>
              : status === "unauthenticated" && 
              <div className='flex flex-row px-2'>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium" onClick={() => { signIn("azure-ad"); }}>sign in</button>
              </div>
            }
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}><a
                
                as="a"
                
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                  {item.name}
                </a></Link>
              ))}
            </div>
          </Disclosure.Panel>
          {/* {
            role[0] && onIndexPage &&
            <div className='grow flex-none px-2 pt-2 pb-3 space-y-1 mx-auto w-[80%]'>
                <Search setSearch={setSearch} key="search-mobile"/>
            </div>
          } */}
        </>
      )}
    </Disclosure>
  )
}