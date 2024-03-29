import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashutosh Sonel | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full flex-col">
            <div className="w-full md:w-full flex justify-center">
              <span className="text-[7.5rem] md:text-[4rem] font-extrabold">
                Ashutosh Sonel
              </span>
              {/* <Image
                src={profilePic}
                alt="Ashutosh"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw
                (max-width: 1200px) 50vw
                50vw
                "
              /> */}
            </div>
            <div className="w-full flex flex-col items-center text-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Full Stack Developer (MERN)"
                className="!text-5xl xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl text-center md:my-8 "
              />
              <p className="my-4 w-1/2 text-base font-medium md:w-full">
                As a full-stack developer, I am committed to transforming
                concepts into inventive web applications. Discover my recent
                projects and articles, highlighting my proficiency in Next.js
                and web development.
              </p>
              <div className="flex items-center self-end py-4 mr-44 mt-2 lg:self-center md:mr-0">
                <Link
                  href="/dummy.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:ashutoshhoonmain@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="ashutosh" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
