import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, motionValue } from 'framer-motion'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import article1 from '../../public/images/articles/metatag.png'
import article2 from '../../public/images/articles/linuxhistory.png'
import article3 from '../../public/images/articles/article3.png'
import TransitionEffect from '@/components/TransitionEffect'

const FrameImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
  const x = motionValue(0)
  const y = motionValue(0)

  const imgRef = useRef(null)

  function handleMouse(e) {
    imgRef.current.style.display = 'inline-block'
    x.set(e.pageX)
    y.set(-10)
  }
  function handleMouseLeave(e) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FrameImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.2 },
        }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-20 md:!hidden"
      />
    </Link>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block "
      >
        <FrameImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw
          (max-width: 1200px) 50vw
          50vw
          "
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg ">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{
        y: 200,
      }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-6 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} link={link} img={img} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 sm:pt-4 xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Ashutosh | Articles Page</title>
        <meta name="desciption" content="" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words can change the World"
            className="mb-16  lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              img={article1}
              title="What does <meta http-equiv=”X-UA-Compatible” content=”IE=edge”> do ?"
              summary="It directs Internet Explorer to utilize the latest rendering engine available, ensuring compatibility with modern web standards and features across different versions of IE."
              time="10 min read"
              link="https://www.geeksforgeeks.org/what-does-meta-http-equivx-ua-compatible-contentieedge-do/"
            />
            <FeaturedArticle
              img={article2}
              title="History of Linux"
              summary="Linux, created by Linus Torvalds in 1991, is an open-source operating system known for its stability, security, and widespread adoption across various devices and industries."
              time="10 min read"
              link="https://www.geeksforgeeks.org/linux-history/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="How Proxy Backend Server using React.js ?"
              img={article3}
              date="06 Dec 2023"
              link="https://www.geeksforgeeks.org/how-proxy-backend-server-using-react-js/"
            />
            <Article
              title="How to Manipulate DOM using Service Worker ?"
              img={article3}
              date="21 Sept 2023"
              link="https://www.geeksforgeeks.org/how-to-manipulate-dom-using-service-worker/"
            />
            <Article
              title="How to target next sibling in Tailwind CSS ?"
              img={article3}
              date="06 Sept 2023"
              link="https://www.geeksforgeeks.org/how-to-target-next-sibling-in-tailwind-css/"
            />
            <Article
              title="Next.js next.config.js File"
              img={article3}
              date="07 Jun 2023"
              link="https://www.geeksforgeeks.org/next-ls-next-config-js-file/"
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles
