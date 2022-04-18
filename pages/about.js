import Meta from '../components/Meta'
import ReactMarkdown from "react-markdown";

const logo = {
    img: "./logo/myECR v1.png",
}

export default function Home() {
    return (
        <>
            <Meta title="About" />

            <div>
                {/* <h1 className="text-4xl m-5">About</h1>
                <hr />
                <div className="m-5">
                    <p>(c) El Camino Real Charter High School</p>
                    <br />
                    <p>Built with ❤ by Steven Bash (Class of 2019)</p>
                </div> */}

                <div className="md:flex px-10 prose max-w-4xl mx-auto">
                    <div className='md:pr-10'>
                        <img
                            className="h-32 md:h-40 mx-auto pointer-events-none"
                            src={logo.img}
                            alt="myECR"
                        />
                    </div>
                    <div className='flex-1'>
                    <ReactMarkdown linkTarget="_blank">
                        {`# About myECR
                        \n myECR is your one-stop shop for all things El Camino.  ECRCHS uses this Single Sign On (SSO) to allow students and staff to access all resources with only one set of login credentials: your myECR email and password.
                        \n---
                        \n This NextJS applicaiton was developed with ❤ by Steven Bash (Class of 2019).
                        `}
                    </ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    )
}