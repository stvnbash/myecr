import Meta from '../components/Meta'

export default function Home() {
    return (
        <>
            <Meta title="Calendar" />

            <div className="h-auto">
                {/* <h1 className="mb-1 px-5 text-4xl font-semibold p-2 border-slate-400 border-b">ECRCHS Calendar</h1> */}
                <div className="">
                    <iframe className="w-full h-[calc(100vh_-_8.5rem)]" src="https://calendar.google.com/calendar/u/0/embed?bgcolor=%23E2E8F0&color=%230000FF&ctz=America/Los_Angeles&height=1600&src=ecrchs.net_3a5bkfg94snfpuli3mgeqj7b30@group.calendar.google.com&wkst=1"></iframe>
                </div>
            </div>
        </>
    )
}