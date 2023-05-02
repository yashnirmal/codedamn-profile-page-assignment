import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Tabs from '@/components/tabs'
import ProfileEdit from '@/components/profiledit'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        <div className='w-full flex justify-center'>
          <div className='max-w-[1300px] w-full flex gap-20'>
            <Tabs />
            <ProfileEdit />
          </div>
        </div>
        
      </main>
    </>
  )
}
