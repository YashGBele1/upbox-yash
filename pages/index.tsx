import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UpBox | by Jozbiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content /> 
      <Footer />
    </div>
  )
}

export default Home