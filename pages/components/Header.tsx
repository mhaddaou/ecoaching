import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <section >
        <div className=' bg-'>
            <div className='flex justify-between w-[70%] px-5 items-center '>
                <div>
                    <Image id='#' className=' cursor-pointer'  src='/images/logo.png' alt='logo' width={100} height={100} />
                </div>
                <div className='flex justify-between gap-10 items-center'>
                    
                </div>
            </div>    

        </div>

    </section>
  )
}
