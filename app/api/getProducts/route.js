'use strict'

import { where } from 'sequelize';
import Product from '../../../lib/databases/models/product';
import { NextResponse } from "next/server";

export async function GET(req) {
    const res = NextResponse;
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    if (category === '' || category === undefined || category === null || !category) {
      try {
        const productItems = await Product.findAll();
        return res.json({ product: productItems });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error fetching product' });
      }
    } else {
      try {
        const productItems = await Product.findAll({
          where: { Category: category }
      });
        return res.json({ product: productItems });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error fetching product' });
      }
    }

}
