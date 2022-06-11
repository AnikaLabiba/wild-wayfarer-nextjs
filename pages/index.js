import Head from 'next/head'
import Image from 'next/image'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'
import styles from '../styles/Home.module.css'
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import About from '../Components/About'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wild Wayfarer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Banner />
        <Services />
        <About />
      </main>

      <footer className={styles.footer}>
        <div>
          <p>Copyright © 2022 - Wild Wayfarer</p>
          <span className={styles.logo}>
            < AiFillFacebook />
            <BsInstagram />
            <AiFillTwitterCircle />
          </span>
        </div>
      </footer>
    </div>
  )
}
