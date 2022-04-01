import Link from 'next/link';
import Image from 'next/image'

export default function Card({ title, url, icon, description }) {
    // Tooltip sample
    // https://codepen.io/robstinson/pen/eYZLRdv

    return (
        <>
            {/* <div class="hover:animate-pulse w-40 mr-10 mb-10">
            <div class="rounded-3xl shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-3xl" src="https://play-lh.googleusercontent.com/2_M-EEPXb2xTMQSTZpSUefHR3TjgOCsawM3pjVG47jI-BrHoXGhKBpdEHeLElT95060B=s0-rw" alt=""/>
                </a>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                </div>
            </div>
        </div> */}
            <Link href={url} passHref>
                <a target="_blank" title={description.length > 1 ? `${title} | ${description}` : title} className="sm:w-40 mx-auto mb-5 sm:mb-6 font-medium hover:underline hover:underline-offset-2 duration-500 bg-white rounded-3xl group" aria-label={`Click this tile to access ${title}`}>
                    {/* <div className="rounded-3xl border hover:border-4 hover:border-transparent shadow-md hover:shadow-xl duration-200 max-w-xs h-full sm:mx-5 mx-2 p-1 2xl:w-36"> */}
                    {/* <div class="rounded-3xl border hover:border-4 hover:border-transparent shadow-md hover:shadow-xl duration-200 max-w-xs h-full sm:mx-5 mx-2 p-1"> */}
                    <div className="rounded-3xl  shadow-md hover:shadow-xl duration-200 max-w-xs h-full p-1">
                        <img className="rounded-3xl mb-2 aspect-square pointer-events-none border-transparent group-hover:border-4 group-hover:border-transparent duration-200 object-contain w-full" src={icon} alt={`Icon for ${title}`}/>
                        <p className="text-center text px-2">{title}</p>
                    </div>
                </a>
            </Link>
        </>
    )

}