import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Header from './components/Header'
import First from './components/First'
import Footer from './components/Footer'
import Down from './components/Down'

function index() {
  return (
   <main className=''>
    <header className='bg-white'>
      <Header />
    </header>
  <First/>
  <Footer/>
  <Down/>
  
   
   </main>
  )
}



export default index