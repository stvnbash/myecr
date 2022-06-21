import Link from 'next/link';
import Card from './Card';
import CardCompact from '../components/CardCompact'
import { motion } from "framer-motion";


export default function Category({ title, oid, cards, role, search, compactmode }) {

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            // delayChildren: 0.3,
            // staggerChildren: 0.2,
            delay: 0.025
          }
        }
      };

    cards.sort((a, b) => (a.title > b.title) ? 1 : -1)
    const items = []
    //  && (Object.keys(card.roles).includes(role[0]))
    // if (card.category.includes(oid) && (Object.keys(card.roles).includes(role[0]))) {
    for (let card of cards) {
        if (Object.keys(card.roles).includes(role[0])) {
            if (card.roles[ role[0] ].category.includes(oid)) {
                if ( search === '' || card.title.toLowerCase().includes(search.toLowerCase()) || card.roles[ role[0] ].description.toLowerCase().includes(search.toLowerCase()) ){
                    // console.log(card.roles[ role[0] ].url)
                    !compactmode ? items.push(<Card
                        title={card.title ? card.title : "None"}
                        description={card.roles[ role[0] ].description ? card.roles[ role[0] ].description : "#"}
                        url={card.roles[ role[0] ].url ? card.roles[ role[0] ].url : "#"}
                        icon={card.icon ? card.icon : "./icon/ECRslant.png"}
                        name={oid}
                        key={card.title}
                        />)
                        : items.push(<CardCompact
                            title={card.title ? card.title : "None"}
                            description={card.roles[ role[0] ].description ? card.roles[ role[0] ].description : "#"}
                            url={card.roles[ role[0] ].url ? card.roles[ role[0] ].url : "#"}
                            icon={card.icon ? card.icon : "./icon/ECRslant.png"}
                            name={oid}
                            key={card.title}
                            />)

                }

            }
        }
    }

    // Avoided using map because each element that didn't return item produced 'undefined' in the array
    // const items = cards
    // .map(card => {
    //     if (Object.keys(card.roles).includes(role[0])) {
    //         if (card.roles[ role[0] ].category.includes(oid)) {
    //             return <Card
    //                 title={card.title ? card.title : "None"}
    //                 // description={card.roles[ role[0] ].description ? card.roles[ role[0] ].description : "#"}
    //                 // url={card.roles[ role[0] ].url ? card.roles[ role[0] ].url : "#"}
    //                 url={"#"}
    //                 icon={card.icon ? card.icon : "https://instructure-uploads.s3.amazonaws.com/account_116420000000000001/attachments/944179/Bash_ECRslant.png"}
    //                 name={oid}
    //                 key={card.title}
    //                 />
    //         }
    //     }
    // })

    // console.log(title, items)




    return (
        items.length > 0
            ? <motion.div className="" initial="hidden" whileInView="visible" variants={item}>
                <h2 className="mb-1 px-5 text-3xl font-semibold p-2 border-slate-400 border-b">{title}</h2>
                {/* <hr /> */}
                <motion.div initial="hidden" whileInView="visible" variants={item} className="px-3 pb-5 pt-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-1 sm:gap-4 overflow-hidden">
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
                </motion.div>
            </motion.div>
            : <div></div>
    )

}