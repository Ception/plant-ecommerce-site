'use client'

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 text-center">
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <div >
                <h2 className="font-bold">WeedWebsite</h2>
                <p>123 Weed Street</p>
                <p><strong>Email:</strong> Weed@support.com</p>
            </div>
            <div >
                <h2 className="font-bold">General</h2>
                <ul>
                    <li>FAQ</li>
                    <li>Shipping</li>
                    <li>Return Policy</li>
                    <li>Track Your Order</li>
                </ul>
            </div>
            <div >
                <h2 className="font-bold">Customer Service</h2>
                <ul>
                    <li>About Us</li>
                    <li>Disclaimer</li>
                    <li>Reviews</li>
                    <li>Limited Time Promotions</li>
                </ul>
            </div>
        </div>
        <hr />
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <p className="text-xl font-semibold">© {new Date().getFullYear()} Weed Website</p>
        <div className="flex space-x-4">
          <Link href="/" className="">Terms & Conditions</Link>
          <Link href="/" className="">Privacy Policy</Link>
          <Link href="/" className="">Contact Us</Link>
        </div>
        <p className="text-sm italic">All rights reserved.</p>
      </div>
    </footer>
  );
}