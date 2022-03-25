import Link from 'next/link';
import RoleSelectorButton from './RoleSelectorButton';

export default function ({roles}) {

    // loop over items of prop to get them into template
    // https://flaviocopes.com/react-how-to-loop/

    // Sort items of prop
    // https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/

    const items = []
    roles.sort((a, b) => (a.order > b.order) ? 1 : -1)


    for (let role of roles) {
        items.push(<RoleSelectorButton title={role.title} />)
    }

    return (
        <>
            <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                <div class="bg-white px-16 py-14 rounded-3xl text-center m-4">
                    <h1 class="text-xl mb-4 font-bold">Welcome to myECR</h1>
                    <h1 class="text-xl mb-4 font-bold">SELECT YOUR ROLE</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items}
                    </div>
                </div>
            </div>
        </>
    )

}