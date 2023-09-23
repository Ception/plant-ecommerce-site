'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  function navigateToHome() {
    router.push('/');
  }

  const amount = 0; // TODO: Get amount of items in cart

  return (
    <header className="p-4">
    <nav className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold tracking-wider italic cursor-pointer transform hover:scale-105 transition-transform duration-500" onClick={navigateToHome}>
          WeedWebsite
        </span>
        <div className="flex items-center space-x-4">
          <input type="text" className="p-2 rounded" placeholder="Search"/>
          <button className="p-2 rounded" onClick={() => { /* Handle login */ }}>Login | Sign Up</button>
          <button className="p-2 rounded" onClick={() => { /* Handle cart */ }}>Cart / ${amount}</button>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <Link href="#"className='flex item-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Shop All
        </Link>
        <Link href="#"className='flex item-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Flowers
        </Link>
        <Link href="#"className='flex item-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Concentrates
        </Link>
        <Link href="#"className='flex item-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Edibles
        </Link>
        <Link href="#"className='flex item-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            CBD
        </Link>
        <Link href="#"className='flex item-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Kits
        </Link>
        <Link href="#"className='flex item-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Merchandise
        </Link>
      </div>
    </nav>
  </header>
  );
}