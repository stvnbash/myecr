import Link from 'next/link';
import Card from '../components/Card';


export default function Header({title, oid, cards}) {
    
    const items = []
    cards.sort((a, b) => (a.title > b.title) ? 1 : -1)
    for (let card of cards) {
        if (card.category.includes(oid)) {
            items.push(<Card title={card.title} url={card.url} icon={card.icon} name={oid} />)
        }
    }


    return (
        items.length > 0
        ? <div class="mb-10">
            <h2 class="mb-1 px-5 text-3xl font-semibold p-2 border-b">{title}</h2>
            {/* <hr /> */}
            <div class="pt-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-1 sm:gap-4 overflow-hidden">
                {/* {cards.map((card, index) => (
                    <Card key={index} title={card.Title} imgURL={card.icon} priority={card.priority}/>
                ))} */}
                {items}
                {/* <Card title="Aeries" url="" icon="https://play-lh.googleusercontent.com/6J47oNiSNizXA610JPz9SCcG8ej9wBJXELZlJOF0uhA5CzdTY0rP_bbPf4rwEAP7Ido=s0-rw"/>
                <Card title="* Staff/Student Live Chat with Tech Office (8am-3pm)" url="" icon="https://play-lh.googleusercontent.com/2_M-EEPXb2xTMQSTZpSUefHR3TjgOCsawM3pjVG47jI-BrHoXGhKBpdEHeLElT95060B=s0-rw"/>
                <Card title="Canvas" url="" icon="https://play-lh.googleusercontent.com/2_M-EEPXb2xTMQSTZpSUefHR3TjgOCsawM3pjVG47jI-BrHoXGhKBpdEHeLElT95060B=s0-rw"/>
                <Card title="ECR Email" url="" icon="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=s0-rw"/>
                <Card title="OneDrive" url="" icon="https://play-lh.googleusercontent.com/6AWr-qrhGT0ohjw0koq3bM8GHEFg1gTurald4FjCDg2RulTp4y_VVsYWUtw7Fo6lsQo=s0-rw"/>
                <Card title="Microsoft Office Portal" url="" icon="https://play-lh.googleusercontent.com/D6XDCje7pB0nNP1sOZkwD-tXkV0_As3ni21us5yZ71_sy0FTWv1s_MQBe1JUnHlgE94=s0-rw"/>
                <Card title="Paycom" url="" icon="https://play-lh.googleusercontent.com/JGhdoNAdO_gYOyPImRbn7CxdeY4a71ZtnhNvTZGsRyYTObPzCXXIOKpSOaQFraU6XUt-=s0-rw"/>
                <Card title="Adobe" url="" icon="https://play-lh.googleusercontent.com/WIVfY42FSk4naFCn42h694luehyzsifuiy2l0ok_-lFeb50qda_7j3YQdp0x2-S2_ykH=s0-rw"/> */}
            </div>
        </div>
        : <></>
    )

}