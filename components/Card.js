import Link from 'next/link';
import Image from 'next/image'


export default function Card({ title, url, icon, description }) {
    // Tooltip sample
    // https://codepen.io/robstinson/pen/eYZLRdv

    return (
        <>
            <Link href={url} passHref>
                <a target="_blank" title={description.length > 1 ? `${title} | ${description}` : title} className="mb-5 sm:mb-6 duration-500 group" aria-label={`Click this tile to access ${title}`}>
                    <div className="sm:w-40 flex flex-col mx-auto rounded-3xl shadow-md hover:shadow-xl duration-200 max-w-xs h-full p-1 bg-white overflow-hidden">
                        {/* <img className="rounded-3xl mb-2 aspect-square pointer-events-none border-transparent group-hover:border-4 group-hover:border-transparent duration-200 object-contain w-full" src={icon} alt={`Icon for ${title}`}/> */}
                        <img className="rounded-3xl mb-2 aspect-square pointer-events-none border-transparent border-4 group-hover:border-0 group-hover:border-transparent duration-200 object-contain w-full" src={icon} alt={`Icon for ${title}`}/>
                        <p className="text-ellipsis overflow-hidden text-center font-medium group-hover:underline group-hover:underline-offset-2 px-2">{title}</p>
                    </div>
                </a>
            </Link>
        </>
    )

}