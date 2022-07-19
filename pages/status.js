import Meta from '../components/Meta'
// import Script from 'next/script'

export default function Home() {
    const url = "https://ecrchs.instatus.com/"
    return (
        <>
            <Meta title="Status" />
            {/* <Script src="https://ecrchs.instatus.com/widget/script.js" /> */}

            <div className="h-auto">
                {/* <h1 className="mb-1 px-5 text-4xl font-semibold p-2 border-slate-400 border-b">ECRCHS Calendar</h1> */}
                <div className="">
                    <iframe className="w-full h-[calc(100vh_-_8.5rem)] rounded-3xl" src={url}></iframe>
                </div>
            </div>
        </>
    )
}