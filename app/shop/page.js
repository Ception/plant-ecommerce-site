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
      <div>
        <Header />
        <div className="flex justify-center items-center mb-6">
            <div className="grid grid-cols-3 w-full">
                <div className="flex justify-center items-center"></div> {/* Empty div to take up the first column */}
                    <div className="flex justify-center items-center">
                        <button className="mx-2">Shop All</button>
                            <span>|</span>
                        <button className="mx-2">Home</button>
                    </div>
                <div className="flex justify-end items-center pr-420">
                    <button>Filter</button>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 grid-rows-3 gap-0 mr-96">
            <div className="justify-self-center border-2 ml-64"><ShopNavBar setCurrentPageShop={setCurrentPageShop} /></div>
            <div className="row-span-3 justify-self-center border-2 w-420">
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
        </div>
        <Footer />
      </div>
    )
  }
  
  
