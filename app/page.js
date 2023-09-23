'use client'

import React, { useEffect, useState } from "react"
import NavBar from "./(components)/NavBar"
import Welcome from "./(pages)/Welcome"
import Orders from "./(pages)/Orders"

export default function Home() {

    const [currentPage, setCurrentPage] = useState('Welcome');

    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 grid-rows-3 gap-0 mr-96">
          <div className="justify-self-center border-2 ml-64"><NavBar setCurrentPage={setCurrentPage} /></div>
          <div className="row-span-3 justify-self-center border-2 w-420">
            {currentPage === 'Welcome' && <Welcome />}
            {currentPage === 'Orders' && <Orders />}
            </div>
        </div>
      </div>
    )
  }
  
  
