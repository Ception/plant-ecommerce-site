'use strict'

import Users from "../../../../lib/databases/models/users";
import { NextResponse } from "next/server";

const res = NextResponse;

export async function POST(req) {
  const data = await req.json();
    const userID = data.userID;
    const userName = data.userName;
    const userEmail = data.userEmail;
    const DOB = data.DOB;
    const userPassword = data.userPassword;

    if (!userID || userID === '' || userID === undefined || userID === null) {
      return res.json({ message: 'userID parameter is required.' });
    }
    if (!userName || userName === '' || userName === undefined || userName === null) {
      return res.json({ message: 'userName parameter is required.' });
    }
    if (!userEmail || userEmail === '' || userEmail === undefined || userEmail === null) {
      return res.json({ message: 'userEmail parameter is required.' });
    }
    if (!DOB || DOB === '' || DOB === undefined || DOB === null) {
      return res.json({ message: 'DOB parameter is required.' });
    }
    if (!userPassword || userPassword === '' || userPassword === undefined || userPassword === null) {
      return res.json({ message: 'userPassword parameter is required.' });
    }

    const params = {
      userID: userID,
      userName: userName,
      userEmail: userEmail,
      DOB: DOB,
      userPassword: userPassword
    };

    try {
      const userResponse = await addUser(params);
      if (!userResponse) {
        return res.json({ message: 'user could not be added: No response from function.' });
      }
      return res.json({ "Server Response": userResponse });
    } catch (err) {
      console.error(err);
      return res.json({ message: 'Error adding user.' });
    }
} 

async function addUser(params) {
  try {
    const addedUser = await Users.create({
      UserID: params.userID,
      UserName: params.userName,
      UserEmail: params.userEmail,
      DOB: params.DOB,
      UserPassword: params.userPassword,
    });
    return addedUser;
  } catch (err) {
    console.error(err);
    throw new Error('Error adding user in function.');
  }
}
