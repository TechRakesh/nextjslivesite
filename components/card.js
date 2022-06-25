import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Card({isOdd, image, name}) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const leftVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -50 },
  }

  const rightVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 50 },
  }


  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);




  


  return (

    <div className={`flex items-center  mb-14 ${isOdd ? "md:flex-row-reverse flex-col": "flex-col md:flex-row" }`}>

        {/* image section */}
        <motion.div ref={ref} variants={isOdd ? rightVariant:leftVariant} initial="hidden" animate={control}
        className='bg-slate-100 rounded-lg shadow-xl w-60 h-60 mr-auto md:w-80 md:h-80 shadow-slate-200'>
            <img className='opacity-80 rounded-lg object-cover w-full h-full' src={image} alt="My Logo" />
        </motion.div>


        {/* text section */}
        <motion.div ref={ref} variants={isOdd ? leftVariant:rightVariant} initial="hidden" animate={control}
         className={`flex-1 ${isOdd ? "md:pr-16": "md:pl-16"} pt-10 md:pt-0`}>

            <h1 className="text-3xl">
                {name}
            </h1>

            <p className='pt-5 text-slate-600 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras bibendum libero ut orci tincidunt mattis. Duis fermentum,
                massa ac eleifend semper, diam magna eleifend metus, 
                vitae semper est felis nec lacus. Sed consequat est nisl, 
                non tincidunt erat auctor at.
            </p>
            <button className='btn-primary '>
                Read More
            </button>

        </motion.div>
    </div>
      
  )
}
