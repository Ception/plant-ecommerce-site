"use strict";

import OrderPrice from "../../../../lib/databases/models/orderPrice.js";
import OrderLine from "../../../../lib/databases/models/orderLine.js";
import Price from "../../../../lib/databases/models/price.js";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

const res = NextResponse;

export async function POST(req) {
  const data = await req.json();
  const orderPriceID = uuid();
  const orderID = data.orderID;

  if (!orderID || orderID === "" || orderID === undefined || orderID === null) {
    return res.json({ message: "orderID parameter is required." });
  }

  const PriceIDs = await getPriceIDs(orderID);

  var finalPrices = [];

  for (let i = 0; i < PriceIDs.length; i++) {
    const returnedPrice = await Price.findOne({
      where: { PriceID: PriceIDs[i] },
    });
    finalPrices.push(returnedPrice.dataValues.Price);
  }

  let totalPrice = 0;
  for (let i = 0; i < finalPrices.length; i++) {
    totalPrice += Number(finalPrices[i]); // Assuming 'Price16' means the price is 16
  }

  try {
    const priceResponse = await OrderPrice.create({
      OrderPriceID: orderPriceID,
      OrderID: orderID,
      TotalPrice: totalPrice,
    });

    return res.json({ "Server Response": priceResponse });
  } catch (err) {
    console.error(err);
    return res.json({ message: "Error fetching price." });
  }
}

async function getPriceIDs(orderID) {
  try {
    const response = await OrderLine.findAll({
      where: {
        OrderID: orderID,
      },
    });

    const priceIDs = response.map((orderLine) => orderLine.dataValues.PriceID);
    return priceIDs;
  } catch (e) {
    console.error(e);
    throw new Error("Error in fetching priceIDs");
  }
}
