import Link from 'next/link';

export default function Header({title, imgURL}) {

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
        <Link href="#">
            <a class="mb-5 sm:mb-10 font-medium hover:underline hover:underline-offset-2 duration-500">
                <div class="rounded-3xl border hover:border-4 hover:border-transparent shadow-md hover:shadow-xl duration-200 max-w-xs h-full sm:mx-5 mx-2 p-1 w-36">
                    <img class="rounded-3xl pb-2" src={imgURL} alt=""/>
                    <p class="text-center text">{title}</p>
                </div>
            </a>
        </Link>
        </>
    )

}