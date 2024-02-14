import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ postion, company, companyLink, time, address, work }) => {
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
          {postion} &nbsp;{' '}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium test-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
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
            postion="Full Stack Intern"
            company="Celebal Technologies"
            companyLink="https://celebaltech.com/"
            time="Jun 2023 - Aug 2023"
            address="Remote"
            work="Actively engaged in a dynamic team environment, contributing to innovative solutions. Designed and
built a blog website as an intern project, demonstrating proficiency in full-stack development and
showcasing technical expertise in a collaborative environment."
          />
          <Details
            postion="Technical Content Writer Intern"
            company="GeekForGeeks"
            companyLink="https://www.geeksforgeeks.org"
            time="Dec 2022 - Mar 2023"
            address="Remote"
            work="Authored and published 18 articles on GeekForGeeks after conducting in-depth research on technical
topics to write compelling content for the company’s website. Reviewed and edited content authored
by team members to ensure grammatical accuracy and consistency, providing constructive feedback.
"
          />
          <Details
            postion="FrontEnd Intern"
            company="Sai Seva Samiti"
            companyLink="https://saisevasamithi.vercel.app/"
            time="Sept 2022 - Nov 2022"
            address="Remote"
            work="Collaborating closely with the NGO team to thoroughly understand their organizational goals, mission,
and specific requirements for the development of their website."
          />
          <Details
            postion="Embedded Systems and Robotics"
            company="ESRC MBM University"
            companyLink="mbm.ac.in"
            time="Jun 2022 - Jul 2022"
            address="Rajasthan, India"
            work="Familiarity with Raspberry Pi Pico, Bluetooth module, QTR Array, Joystick, and other hardware
components. Proficiency in creating 3D prints using AutoDesk 123D and TinkerCad, and developing
fundamental applications using MIT App Inventor for mobile app development"
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
