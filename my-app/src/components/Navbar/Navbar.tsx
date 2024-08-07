import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
return (
    <>
        <div className='flex justify-between items-center w-full max-w-screen bg-gradient-to-b from-[#504EBA] to-[#11112F] p-4 rounded-b-2xl border border-b-white border-solid'>
            <div className='flex flex-row gap-2 '>
                <Image src="/Logo.svg" alt='gambar1' width={50} height={50} className=''/>
                <Image src="/Frame 37346.svg" alt='gambar1' width={50} height={50} className=''/>
            </div>
            <div className='flex  flex-row gap-8 justify-between text-white'>
                <Link href ={'/'}>Home</Link>
                <Link href ={'/about'}>About</Link>
                <Link href ={'/'}>Event</Link>

            </div>
            <div className='flex flex-row gap-5 text-white'>
    
                <button className=''>Login</button>
                <button className='px-5 py-2 border border-white rounded-3xl'>Register</button>
            </div>
        </div>
        {/* <Image src="/image 8.svg" alt='gambar2' width={1300} height={10} className=''/> */}
        </>
)
}

export default Navbar