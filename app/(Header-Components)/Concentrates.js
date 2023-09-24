import Link from 'next/link'
import React from 'react'

export default function Concentrates() {
  return (
    <div className='w-38'>
        <ul>
            <li><Link href='#' className='mt-4'>Shop by Best Seller</Link></li><hr />
            <li><Link href='#' className='mt-4'>Shop by Newest</Link></li><hr />
            <li><Link href='#' className='mt-4'>Shop by Rating</Link></li><hr />
        </ul>
    </div>
  )
}
