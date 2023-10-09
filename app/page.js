'use client'

import React, { useState } from "react"
import NavBar from "./(navigation-components)/NavBar"
import Welcome from "./(main-pages)/Welcome"
import Orders from "./(main-pages)/Orders"
import Header from './(navigation-components)/Header'
import Footer from './(navigation-components)/Footer'
import Addresses from "./(main-pages)/Addresses"
import AccountDetails from "./(main-pages)/AccountDetails"
import Deals from "./(main-pages)/Deals"
import LikedProducts from "./(main-pages)/LikedProducts"
import ReferFriend from "./(main-pages)/ReferFriend"
import Help from "./(main-pages)/Help"
import Logout from "./(main-pages)/Logout"

export default function Home() {
  const [currentPage, setCurrentPage] = useState('Welcome');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow px-96 py-4 space-x-4">
          <div className="w-64 border-2">
            <NavBar setCurrentPage={setCurrentPage} />
          </div>
          <div className="flex-grow border-2">
          {currentPage === 'Welcome' && <Welcome />}
          {currentPage === 'Orders' && <Orders />}
          {currentPage === 'Addresses' && <Addresses />}
          {currentPage === 'AccountDetails' && <AccountDetails />}
          {currentPage === 'Deals' && <Deals />}
          {currentPage === 'LikedProducts' && <LikedProducts />}
          {currentPage === 'ReferFriend' && <ReferFriend />}
          {currentPage === 'Help' && <Help />}
          {currentPage === 'Logout' && <Logout />}
          </div>
      </div>
      <Footer />
    </div>
  )
}

  
  
