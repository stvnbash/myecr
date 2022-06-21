import Link from 'next/link';
import Category from './Category';

export default function CategorySelector({ categories, cards, role, search, compactmode }) {

    // console.log(categories)

    categories.sort((a, b) => (a.id > b.id) ? 1 : -1)

    // const items = []
    // for (let category of categories) {
    //     items.push(<Category title={category.title} oid={category.oid} cards={cards} role={role} key={category.id}/>)
    // }

    const items = categories.map(category => <Category title={category.title} oid={category.oid} cards={cards} role={role} key={category.id} search={search} compactmode={compactmode} />)

    return (
        <div>
            {items}
        </div>
    )

}