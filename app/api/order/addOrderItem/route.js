"use strict";

import OrderLine from "../../../../lib/databases/models/orderLine";
import { NextResponse } from "next/server";
import axios from "axios";
import { v4 as uuid } from "uuid";

const res = NextResponse;

export async function POST(req) {
  const data = await req.json();
  const orderLineID = uuid();
  const orderID = data.orderID;
  const productID = data.productID;
  const weightID = data.weightID;

  if (!orderID || orderID === "" || orderID === undefined || orderID === null) {
    return res.json({ message: "orderID parameter is required." });
  }

  if (
    !productID ||
    productID === "" ||
    productID === undefined ||
    productID === null
  ) {
    return res.json({ message: "productID parameter is required." });
  }

  const params = {
    orderLineID: orderLineID,
    orderID: orderID,
    productID: productID,
  };

  console.log("params: ", params);
  console.log("productID: ", productID);
  console.log("weightID: ", weightID);

  try {
    const response = await axios.get(
      `http://localhost:3000/api/getPrices?productID=${productID}&weightID=${weightID}`
    );
    params.priceID = response.data.price.PriceID;
  } catch (err) {
    console.error(err);
    return res.json({ message: "Error fetching potency." });
  }

  try {
    const orderLineResponse = await addItem(params);
    if (!orderLineResponse) {
      return res.json({
        message: "item could not be added: No response from function.",
      });
    }

    return res.json({ "Server Response": orderLineResponse });
  } catch (err) {
    console.error(err);
    return res.json({ message: "Error adding item into order." });
  }
}

async function addItem(params) {
  console.log("params in fuction: ", params);

  try {
    const addedItem = await OrderLine.create({
      OrderLineID: params.orderLineID,
      OrderID: params.orderID,
      ProductID: params.productID,
      PriceID: params.priceID,
    });

    return addedItem;
  } catch (err) {
    console.error(err);
    throw new Error("Error adding item in function.");
  }
}
