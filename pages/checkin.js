import Meta from '../components/Meta'

export default function Home() {
    const url = "https://docs.google.com/forms/d/e/1FAIpQLScqSmLcFroZlAlvWXl7roBbLBR_GQFEk3xsMrNe_8LtOZzeHg/viewform?embedded=true"
    return (
        <>
            <Meta title="Check In" />

            <div className="h-auto">
                {/* <h1 className="mb-1 px-5 text-4xl font-semibold p-2 border-slate-400 border-b">ECRCHS Calendar</h1> */}
                <div className="">
                    <iframe className="w-full h-[calc(100vh_-_8.5rem)]" src={url}></iframe>
                </div>
            </div>
        </>
    )
}