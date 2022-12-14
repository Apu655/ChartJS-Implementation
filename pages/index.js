import Head from 'next/head'
import Image from 'next/image'
import BarChart from '../components/Chart'
import Heat from '../components/Heat'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log("Testify")

  const data = {
    labels:[2012,2014,2016,2018],
    datasets:[
      {
        label: "Users Gained",
        data: [12,2,3,56],
        backgroundColor:[
          "rgba(155,255,255)"
        ]
      }
    ]
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <BarChart chartData={data} />
        <h1>Hello world</h1>
        <h2>Hello World 2</h2>
      </main>

          </div>
  )
}
