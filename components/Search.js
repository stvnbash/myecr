import Link from 'next/link';

export default function Search({ setSearch }) {
    return (
        <div>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="search"
                autoComplete="off"
                type="search"
                placeholder="Search"
                onChange={() => {setSearch(document.getElementById('search').value);}}>
            </input>
        </div>
    )

}