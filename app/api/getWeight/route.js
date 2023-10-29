'use strict'

import Weight from '../../../lib/databases/models/weight';
import { NextResponse } from "next/server";

const res = NextResponse;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const weight = searchParams.get("weight");

    if (!weight || weight === '' || weight === undefined || weight === null) {
      return res.json({ message: 'Weight parameter is required.' });
    }

    try {
      const weightData = await getWeight(weight);
      if (!weightData) {
        return res.json({ message: 'Weight not found.' });
      }
      return res.json({ weight: weightData });
    } catch (err) {
      console.error(err);
      return res.json({ message: 'Error fetching weight.' });
    }
} 

async function getWeight(weight) {
  try {
    const productWeight = await Weight.findOne({
      where: { WeightID: weight },
    });
    return productWeight;
  } catch (err) {
    console.error(err);
    throw new Error('Error in fetching weight');
  }
}
