'use client'

import React, { useState } from "react"
import ShopNavBar from "../(navigation-components)/ShopNavBar"
import Header from '../(navigation-components)/Header'
import Footer from '../(navigation-components)/Footer'
import Bundles from "@/(shop-pages)/Bundles"
import Flowers from "@/(shop-pages)/Flowers"
import Concentrates from "@/(shop-pages)/Concentrates"
import Edibles from "@/(shop-pages)/Edibles"
import Deals from "@/(shop-pages)/Deals"
import LikedProducts from "@/(shop-pages)/LikedProducts"
import PreRoll from "@/(shop-pages)/PreRoll"
import CBD from "@/(shop-pages)/CBD"
import Merchandise from "@/(shop-pages)/Merchandise"

export default function Home() {
  const [currentPageShop, setCurrentPageShop] = useState('Bundles');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex justify-center items-center mb-6 w-full px-4">
          <div className="grid grid-cols-3 w-full">
              <div className="flex justify-center items-center"></div> {/* Empty div for alignment */}
              <div className="flex justify-center items-center space-x-2">
                  <button>Shop All</button>
                  <span>|</span>
                  <button>Home</button>
              </div>
              <div className="flex justify-end items-center space-x-4">
                  <button>Filter</button>
              </div>
          </div>
      </div>

      <div className="flex flex-grow p-4 px-96 space-x-4">
          <div className="w-64 border-2">
            <ShopNavBar setCurrentPageShop={setCurrentPageShop} />
          </div>
          <div className="flex-grow border-2">
            {currentPageShop === 'Bundles' && <Bundles />}
            {currentPageShop === 'Flowers' && <Flowers />}
            {currentPageShop === 'Concentrates' && <Concentrates />}
            {currentPageShop === 'Edibles' && <Edibles />}
            {currentPageShop === 'Deals' && <Deals />}
            {currentPageShop === 'LikedProducts' && <LikedProducts />}
            {currentPageShop === 'PreRoll' && <PreRoll />}
            {currentPageShop === 'CBD' && <CBD />}
            {currentPageShop === 'Merchandise' && <Merchandise />}
          </div>
      </div>

      <Footer />
    </div>
  )
}

  