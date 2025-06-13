import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Analytics } from "@vercel/analytics/next"

function App() {

  return (
    <>
      <div className='m-0 p-0'>
      <Header />
      <Body />
      <Analytics />
      </div>
    </>
  )
}

export default App
