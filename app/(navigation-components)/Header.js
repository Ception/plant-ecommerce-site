'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ShopAll from '@/(header-components)/ShopAll';
import Flowers from '@/(header-components)/Flowers';
import Concentrates from '@/(header-components)/Concentrates';
import Edibles from '@/(header-components)/Edibles';
import CBD from '@/(header-components)/CBD';
import Kits from '@/(header-components)/Kits';
import Merchandise from '@/(header-components)/Merchandise';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isFlowersOpen, setIsFlowersOpen] = useState(false);
  const [isConcentratesOpen, setIsConcentratesOpen] = useState(false);
  const [isEdiblesOpen, setIsEdiblesOpen] = useState(false);
  const [isCBDOpen, setIsCBDOpen] = useState(false);
  const [isKitsOpen, setIsKitsOpen] = useState(false);
  const [isMerchandiseOpen, setIsMerchandiseOpen] = useState(false);

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
          <button className="p-2 rounded" onClick={() => { console.log("login") }}>Login</button>
          <p>|</p> {/* Button Separator */}
          <button className="p-2 rounded" onClick={() => { console.log("login") }}>Sign Up</button>
          <button className="p-2 rounded" onClick={() => { console.log("cart") }}>Cart / ${amount}</button>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4" >
        <Link href="/shop" onMouseEnter={() => setIsShopOpen(true)} className='flex items-center gap-1 font-bold'>
          <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
          </svg>
          Shop All
        {isShopOpen && <div className="shop-all-modal transition duration-300 mt-9090" onMouseLeave={() => setIsShopOpen(false)} style={{ display: 'block' }}><ShopAll /></div>}
        </Link>
        <Link href="#" onMouseEnter={() => setIsFlowersOpen(true)} className='flex items-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Flowers
            {isFlowersOpen && <div className="shop-all-modal transition duration-300 mt-9090" onMouseLeave={() => setIsFlowersOpen(false)} style={{ display: 'block' }}><Flowers /></div>}
        </Link>
        <Link href="#" onMouseEnter={() => setIsConcentratesOpen(true)} className='flex items-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Concentrates
            {isConcentratesOpen && <div className="shop-all-modal transition duration-300 mt-9090" onMouseLeave={() => setIsConcentratesOpen(false)} style={{ display: 'block' }}><Concentrates /></div>}
        </Link>
        <Link href="#" onMouseEnter={() => setIsEdiblesOpen(true)} className='flex items-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Edibles
            {isEdiblesOpen && <div className="shop-all-modal transition duration-300 mt-9090" onMouseLeave={() => setIsEdiblesOpen(false)} style={{ display: 'block' }}><Edibles /></div>}
        </Link>
        <Link href="#" onMouseEnter={() => setIsCBDOpen(true)} className='flex items-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            CBD
            {isCBDOpen && <div className="shop-all-modal transition duration-300 mt-9090" onMouseLeave={() => setIsCBDOpen(false)} style={{ display: 'block' }}><CBD /></div>}
        </Link>
        <Link href="#" onMouseEnter={() => setIsKitsOpen(true)} className='flex items-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Kits
            {isKitsOpen && <div className="shop-all-modal transition duration-300 mt-9090" onMouseLeave={() => setIsKitsOpen(false)} style={{ display: 'block' }}><Kits /></div>}
        </Link>
        <Link href="#" onMouseEnter={() => setIsMerchandiseOpen(true)} className='flex items-center gap-1 font-bold'>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
        </svg>
            Merchandise
            {isMerchandiseOpen && <div className="shop-all-modal transition duration-300 mt-9090" onMouseLeave={() => setIsMerchandiseOpen(false)} style={{ display: 'block' }}><Merchandise /></div>}
        </Link>
      </div>
    </nav>
  </header>
  );
}