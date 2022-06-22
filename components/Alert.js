import Link from 'next/link';
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
// import remarkGfm from 'remark-gfm' // package uninstalled
// const current = new Date();
// const date = `${current.getFullYear()}-${current.getMonth()+1 > 9 ? current.getMonth()+1 : '0' + (current.getMonth()+1)}-${current.getDate() > 9 ? current.getDate() : '0' + current.getDate()}`;

export default function Alert({ Alert_Title, Alert_Body, Alert_MD, Alert_Date }) {

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

    return (
        <motion.div initial="hidden" whileInView="visible" variants={item} className="max-w-7xl mx-auto bg-yellow-100 border-t-4 border-yellow-500 rounded-xl text-teal-900 px-4 py-3 mb-3 shadow-md" role="alert">
            <div className="flex">
                <div className="py-1"><svg className="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                <div className="sm:flex w-full">
                    <div className="prose max-w-none sm:flex-1
                        text-teal-900 prose-headings:text-teal-900 prose-a:text-teal-900 prose-strong:text-teal-900 prose-ul:text-teal-900 prose-ol:text-teal-900
                        prose-headings:m-0 prose-li:m-0 prose-p:m-0">
                        {/* Title and Body */}
                        <p className="font-bold">{Alert_Title}</p>
                        <p className="">{Alert_Body}</p>
                        {/* Markdown */}
                        <ReactMarkdown linkTarget="_blank">{Alert_MD}</ReactMarkdown>
                    </div>
                    <p className="text-sm ml-auto md:ml-2 mt-auto text-right">{Alert_Date}</p>
                </div>
            </div>
        </motion.div>
    )

}