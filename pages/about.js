import Meta from '../components/Meta'

export default function Home() {
    return (
        <>
            <Meta title="About" />

            <div className="container">
                <h1 className="text-4xl m-5">About</h1>
                <hr />
                <div className="m-5">
                    <p>(c) El Camino Real Charter High School</p>
                    <br />
                    <p>Built with ❤ by Steven Bash (Class of 2019)</p>
                </div>
            </div>
        </>
    )
}