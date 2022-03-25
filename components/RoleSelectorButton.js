import Link from 'next/link';

export default function ({title}) {

    return (
        <>
            <button class="px-4 py-2 font-semibold text-sm bg-blue-800 text-white rounded-full shadow-sm hover:shadow-lg hover:font-bold w-60">{title}</button>
        </>
    )

}