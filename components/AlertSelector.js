import Link from 'next/link';
import Alert from './Alert';

export default function AlertSelector({ alerts, role }) {

    // const current = new Date();
    // const date = `${current.getFullYear()}-${current.getMonth()+1 > 9 ? current.getMonth()+1 : '0' + (current.getMonth()+1)}-${current.getDate() > 9 ? current.getDate() : '0' + current.getDate()}`;

    // A note about dates
    // In Chrome, the following work: new Date('2022-04-05 4:50 AM') and new Date('2022-06-03 11:59 PM')
    // In Firefox, the above do not work.  Firefox will return invalid date as it does not support the AM and PM
    // So, we will use the following: new Date('2022-04-05 4:50') and new Date('2022-06-03 23:59')

    const currentDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    // console.log(categories)

    alerts.sort((a, b) => (a.id > b.id) ? 1 : -1)

    const items = []
    for (let alert of alerts) {
        const startDate = new Date(alert.start)
        const endDate = new Date(alert.end)
        // console.log("currentDate", currentDate)
        // console.log("start", startDate, "\n", startDate < currentDate)
        // console.log("end", endDate, "\n", endDate > currentDate)
        if (role[0] && startDate <= currentDate && endDate >= currentDate) {
            alert.roles && alert.roles.includes(role[0])? items.push(<Alert Alert_Title={alert.title} Alert_Body={alert.body} Alert_MD={alert.md} Alert_Date={startDate.toLocaleDateString('en-US', dateOptions)} key={alert.id}/>) : ''
            !alert.roles ? items.push(<Alert Alert_Title={alert.title} Alert_Body={alert.body} Alert_MD={alert.md} Alert_Date={startDate.toLocaleDateString('en-US', dateOptions)} key={alert.id}/>) : ''
        }
    }

    // if (typeof window !== 'undefined') {
    // console.log('You are on the browser')
    // // 👉️ can use localStorage here
    // } else {
    // console.log('You are on the server')
    // // 👉️ can't use localStorage
    // }
    
    // const items = categories.map(category => <Category title={category.title} oid={category.oid} cards={cards} role={role} key={category.id} search={search}/>)

    return (
        <div>
        {items}
        </div>
    )

}