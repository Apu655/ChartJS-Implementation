import Head from 'next/head'
import Image from 'next/image'
import BarChart from '../components/chart'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data = {
    labels:[2012,2014,2016,2018],
    datasets:[
      {
        label: "Users Gained",
        data: [12,2,3,56],
        backgroundColor:[
          "rgba(155,255,255,0.8)"
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
        
      </main>

          </div>
  )
}
