'use strict'

import Product from '../../../lib/databases/models/product';
import { NextResponse } from "next/server";

export async function GET(req) {
    const res = NextResponse;

    if (Product === undefined || Product === null || Product === '') {console.log('Product is undefined, null or empty')} else {console.log('Product is defined')}  

    try {
        const productItems = await Product.findAll();
        return res.json({ product: productItems });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error fetching product' });
      }
}
