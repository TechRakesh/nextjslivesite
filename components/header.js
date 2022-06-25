import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Header() {

    // logo animation style
    const logoVariant = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: -10 },
    }

    return (
        <div className="sticky top-0 left-0 right-0 z-50 py-2 bg-white shadow">
            <Head>
                <title>Next js Project</title>
                <meta name="" content="" />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ioc`} /> 
            </Head>
            <div className={'lg:container mx-auto px-5 flex justify-between items-center'}>
                <Link href="/" >
                    <motion.a variants={logoVariant} initial="hidden" animate="visible"
                    className="relative inline-block w-20 h-20 p-3 -mb-10 bg-orange-500 shadow-lg md:w-24 md:h-24 shadow-orange-100 "> 
                        <img className='w-7 md:w-10 mx-auto object-cover brightness-[1000]' 
                        src={`/nextjslivesite/images/logo.png`} alt="My Logo" />
                        <p className="mt-2 text-xs font-semibold text-white md:text-sm">Your Logo</p>
                    </motion.a>
                </Link>

                <Link href="/">
                    <a> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </a>
                </Link>
            </div>
        </div>
    )
  }