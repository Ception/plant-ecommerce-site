'use strict'

import Price from '../../../lib/databases/models/price';
import { NextResponse } from "next/server";

const res = NextResponse;

export async function GET(req) {
    const { searchParams } = new URL(req.url);
  const ProductID = searchParams.get("productID");
  const WeightID = searchParams.get("weightID");

    if (!ProductID || ProductID === '' || ProductID === undefined || ProductID === null) {
      return res.json({ message: 'ProductID parameter is required.' });
    }
    if (!WeightID || WeightID === '' || WeightID === undefined || WeightID === null) {
      return res.json({ message: 'WeightID parameter is required.' });
    }

    try {
      const priceData = await getPrice(ProductID, WeightID);
      if (!priceData || priceData === '' || priceData === undefined || priceData === null) {
        return res.json({ message: 'Price not found.' });
      }
      return res.json({ price: priceData });
    } catch (err) {
      console.error(err);
      return res.json({ message: 'Error fetching potency.' });
    }
} 

async function getPrice(ProductID, WeightID) {
  try {
    const productPrice = await Price.findOne({
      where: { 
        ProductID,
        WeightID
      }
    });
    return productPrice;
  } catch (err) {
    console.error(err);
    throw new Error('Error in fetching price');
  }
}
