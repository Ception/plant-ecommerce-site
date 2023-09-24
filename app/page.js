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
      <div>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 grid-rows-3 gap-0 mr-96">
            <div className="justify-self-center border-2 ml-64"><NavBar setCurrentPage={setCurrentPage} /></div>
            <div className="row-span-3 justify-self-center border-2 w-420">
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
        </div>
        <Footer />
      </div>
    )
  }
  
  
