import Link from 'next/link';
import Image from 'next/image'

export default function Card({ title, url, icon, description }) {
    // Tooltip sample
    // https://codepen.io/robstinson/pen/eYZLRdv

    return (
        <>
            <Link href={url} passHref>
                <a target="_blank" title={description.length > 1 ? `${title} | ${description}` : title} className="mb-5 sm:mb-6 duration-500 group" aria-label={`Click this tile to access ${title}`}>
                    <div className="flex flex-col items-center sm:flex-row rounded-3xl sm:rounded-xl shadow-md hover:shadow-xl duration-200 h-full p-1 bg-white overflow-hidden">
                        <img className="sm:w-14 rounded-3xl sm:rounded-xl mb-2 sm:mb-0 aspect-square pointer-events-none border-transparent border-4 sm:border-[3px] group-hover:border-0 group-hover:border-transparent duration-200 object-contain" src={icon} alt={`Icon for ${title}`} />
                        <p className="text-ellipsis overflow-hidden w-full text-center text-base sm:text-sm md:text-base font-medium group-hover:underline group-hover:underline-offset-2 px-2">{title}</p>
                    </div>
                </a>
            </Link>
        </>
    )

}