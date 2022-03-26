import Link from 'next/link';
import Category from './Category';

export default function ({categories, cards}) {

    // console.log(categories)

    const items = []
    categories.sort((a, b) => (a.id > b.id) ? 1 : -1)


    for (let category of categories) {
        items.push(<Category title={category.title} oid={category.oid} cards={cards} key={category.id}/>)
    }

    return (
        <>
        {items}
        </>
    )

}