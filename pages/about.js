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
                        {`# About MyECR
                        \n MyECR is your one-stop shop for all things El Camino.
                        \n For **students and staff**, apps on the MyECR Portal use your ECRCHS Single Sign-On (SSO) account to provide access to all school resources with only one set of login credentials: your MyECR email and password.
                        \n For **parents / guardians**, the MyECR Portal gives you quick access to commonly used school resources.
                        \n---
                        \n This application was built with ❤ by Steven Bash (Class of 2019).
                        \n Technologies used: Developed with NextJS and Styled with Tailwind CSS
                        \n Please email [techsupport@ecrchs.net](mailto:techsupport@ecrchs.net) if you have any questions or concerns.
                        \n---
                        \n ## Accessibility Statement
                        \n El Camino Real Charter High School is committed to ensuring accessibility of its website for all students, parents, and any other member of the community including those members with disabilities. El Camino Real Charter High School aims to make every effort to conform to the W3C WAI’s Web Content Accessibility Guidelines (WCAG) 2.0, Level AA conformance standard, or updated equivalents of these guidelines.
                        \n We are committed to complying with the provisions of Section 504 and Section 508 of the Rehabilitation Act of 1973 so that students, parents, and members of the public with disabilities are able to independently acquire the same information, engage in the same interactions, and enjoy the same benefits and services within the same timeframe as those without disabilities, with substantially equivalent ease of use. Compliance of El Camino Real Charter High School with the aforementioned provisions will assure that the members with disabilities are not excluded from participation in, denied the benefits of, or otherwise subjected to discrimination in any programs, services, and activities delivered on El Camino Real Charter High School’s website.
                        \n El Camino Real Charter High School strives to conform to Web Content Accessibility Guidelines (WCAG) 2.0, Level AA conformance standards, or updated equivalents, on an ongoing basis. This applies to all new web content produced, published, uploaded or updated by El Camino Real Charter High School. We will continue to test the site to make sure that all content on the site is accessible to all visitors and continue to work to improve the accessibility standards of our website. Any nonconforming web pages will be corrected and made compliant in a timely manner. If you would like additional assistance or have accessibility concerns, please contact us at (818) 595-7517 or by email at techsupport@ecrchs.net.
                        `}
                    </ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    )
}