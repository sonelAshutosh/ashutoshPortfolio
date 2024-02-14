import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'
import { useMotionValue, useInView, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { React, useEffect, useRef } from 'react'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])
  useEffect(() => {
    springValue.on(
      'change',
      (latest) => {
        if (ref.current && latest.toFixed(0) <= value)
          ref.current.textContent = latest.toFixed(0)
      },
      [springValue, value]
    )
  })

  return <span ref={ref}></span>
}

function about() {
  return (
    <>
      <Head>
        <title>Ashutosh | About Page</title>
        <meta name="desciption" content="" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Lets make Web Beautiful!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Ashutosh, Passionate final year Information Technology
                undergraduate student with practical expertise in JavaScript,
                React.js, Next.js, Node.js, C++, and Python. Eager to embrace
                new challenges within the tech domain and explore diverse
                technologies.
              </p>
              <p className="py-4 font-medium">
                I believe that design is about more than just making things look
                pretty it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

              <Image
                src={profilePic}
                alt="ashutosh"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw
                (max-width: 1200px) 50vw
                33vw
                "
              />
            </div>
            <div className="col-span-2 flex flex-col justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-between xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5x xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-between xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5x xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-between xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5x xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
