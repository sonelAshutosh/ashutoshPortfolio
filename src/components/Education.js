import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
        }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type} &nbsp;{' '}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full xs:text-sm">{info}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16   ">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Engineering In Information Technology"
            time="2020 - Present"
            place="MBM University"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="Class 12 CBSE"
            time="2018 - 2020"
            place="St. Annes School"
            info="I excelled in Class 12 PCM courses in India, mastering the fundamental subjects of Physics, Chemistry, and Mathematics. Through rigorous study and dedication, I acquired a solid foundation in science and mathematics, paving the way for future academic pursuits and career endeavors."
          />
          <Details
            type="Class 10 CBSE"
            time="2018"
            place="St. Annes School"
            info="In Class 10, I thrived in foundational subjects like Mathematics, Science, and English, laying the groundwork for my academic journey. With diligence and perseverance, I navigated through diverse topics, honing essential skills and knowledge vital for future educational pursuits."
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
