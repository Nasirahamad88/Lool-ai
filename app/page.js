"use client"
import Image from 'next/image'
import Chat from './(dashbord)/Chat/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Chat/>
    </main>
  )
}
