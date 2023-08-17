import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Down from './components/Down'
import { RootState, AppDispatcher } from './components/store'
import { useDispatch, useSelector } from 'react-redux'
function Dashbord() {

  const user = useSelector((state : RootState) => state.auth.user)
  return (
    <main className=''>
    <header className='bg-white'>
      <Header />
    </header>
    <section className='bg-bg text-slate-700'>
      <div className='py-20 container mx-auto'>
        <div>
          Welcom {user?.displayName}
        </div>

      </div>
    </section>
  <Footer/>
  <Down/>
  
   
   </main>
  )
}

export default Dashbord