"use strict";

import Orders from "../../../../lib/databases/models/orders";
import { NextResponse } from "next/server";
import axios from "axios";
import { v4 as uuid } from "uuid";

const res = NextResponse;

export async function POST(req) {
  const data = await req.json();
  const orderID = uuid();
  const userID = data.userID;
  var items = data.items;
  var itemIDs = items.split(",");
  var weights = data.weights;
  var weightIDs = weights.split(",");

  console.log("items: ", items);
  console.log("itemIDs: ", itemIDs);

  console.log("orderID: ", orderID);

  if (itemIDs.length !== weightIDs.length) {
    return res.json({ message: "itemIDs and weightIDs do not match." });
  }

  if (!orderID || orderID === "" || orderID === undefined || orderID === null) {
    return res.json({ message: "orderID parameter is required." });
  }

  if (!userID || userID === "" || userID === undefined || userID === null) {
    return res.json({ message: "userID parameter is required." });
  }
  if (!items || items === "" || items === undefined || items === null) {
    return res.json({ message: "items parameter is required." });
  }

  const params = {
    orderID: orderID,
    userID: userID,
    items: items,
  };

  console.log("params: ", params);

  try {
    const orderResponse = await addOrder(params);
    if (!orderResponse) {
      return res.json({
        message: "order could not be added: No response from function.",
      });
    }

    const axiosPromises = [];

    for (let i = 0; i < itemIDs.length; i++) {
      const axiosPromise = axios.post("http://localhost:3000/api/order/addOrderItem", {
        orderID: orderID,
        productID: itemIDs[i],
        weightID: weightIDs[i],
      });
      
      axiosPromises.push(axiosPromise);
    }

    await Promise.all(axiosPromises);

    const priceResponse = await axios.post("http://localhost:3000/api/order/setOrderPrice", {orderID: orderID});

    console.log("priceResponse: ", priceResponse.status);

    return res.json({ "Server Response": orderResponse });
  } catch (err) {
    console.error(err);
    return res.json({ message: "Error adding order." });
  }
}

async function addOrder(params) {
  try {
    const addedOrder = await Orders.create({
      OrderID: params.orderID,
      UserID: params.userID,
      DatePlaced: new Date(),
      DatePayed: null,
      Verified: 0,
    });

    return addedOrder;
  } catch (err) {
    console.error(err);
    throw new Error("Error adding order in function.");
  }
}
