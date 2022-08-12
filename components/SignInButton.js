/*
This component is currently unused.  There is similar code to this component in both the RoleSelector and the AuthPrompt components.
*/

export default function Search({ setSearch }) {
    return (
        <div>
            {/* <a className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"> */}
            {/* <a className="grid grid-cols-1 gap-4 mt-10"> */}
            <a className="grid grid-cols-1 gap-4">
                {items}
                {
                    !session && <div className='border-0 border-t-2 border-black py-4'>
                        <h1 className="text-xl mb-4 font-bold">EMPLOYEES, SIGN IN HERE</h1>

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
    )

}