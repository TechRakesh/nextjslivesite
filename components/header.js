import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {

    // logo animation style
    const logoVariant = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: -10 },
    }

    return (
        <div className="shadow py-2 bg-white sticky top-0 left-0 right-0 z-50">
            <div className={'lg:container mx-auto px-5 flex justify-between items-center'}>
                <Link href="/" >
                    <motion.a variants={logoVariant} initial="hidden" animate="visible"
                    className="bg-orange-500 w-20 md:w-24 p-3 relative -mb-10 h-20 md:h-24 inline-block shadow-orange-100 shadow-lg "> 
                        <img className=' w-7 md:w-10 mx-auto object-cover brightness-[1000]' src={'/images/logo.png'} alt="My Logo" />
                        <p className="text-white text-xs md:text-sm font-semibold mt-2">Your Logo</p>
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