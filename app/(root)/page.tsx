
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl='/'/>
      </header>
      <div>Your home page&apos;s content can go here.</div>
    </>
  )
}

export default Home

