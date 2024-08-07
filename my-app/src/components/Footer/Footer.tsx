import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#201F53] p-8 flex justify-between items-center'>
      <Image src="/footerkiri.svg" alt='footerkiri' width={300} height={300} className='' />
      <div className='ml-auto mr-20'>
        <Image src="/footerkanan.svg" alt='footerkanan' width={300} height={300} className='' />
      </div>
    </div>
  )
}

export default Footer
