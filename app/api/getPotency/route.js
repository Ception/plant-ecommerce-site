'use strict'

import Potency from '../../../lib/databases/models/potency';
import { NextResponse } from "next/server";

const res = NextResponse;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const potency = searchParams.get("potency");

    if (!potency || potency === '' || potency === undefined || potency === null) {
      return res.json({ message: 'Potency parameter is required.' });
    }

    try {
      const potencyData = await getWeight(potency);
      if (!potencyData) {
        return res.json({ message: 'Potency not found.' });
      }
      return res.json({ potency: potencyData });
    } catch (err) {
      console.error(err);
      return res.json({ message: 'Error fetching potency.' });
    }
} 

async function getWeight(potency) {
  try {
    const productPotency = await Potency.findOne({
      where: { PotencyID: potency },
    });
    return productPotency;
  } catch (err) {
    console.error(err);
    throw new Error('Error in fetching potency');
  }
}
