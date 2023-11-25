'use strict'

import Users from "../../../../lib/databases/models/users";
import { NextResponse } from "next/server";
import axios from "axios";
import { v4 as uuid } from "uuid";

const bcrypt = require('bcrypt');
const saltRounds = 10;
const res = NextResponse;

export async function POST(req) {
  const data = await req.json();
    const userID = uuid();
    const userName = data.userName;
    const userEmail = data.userEmail;
    const DOB = data.DOB;
    var userPassword = data.userPassword;
    const confirmPassword = data.confirmPassword;

    if (!confirmPassword || confirmPassword === '' || confirmPassword === undefined || confirmPassword === null) {
      return res.json({ message: 'confirmPassword parameter is required.' });
    }

    if (userPassword !== confirmPassword) {return res.json({ message: 'Passwords do not match.' });}

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

    try {
      userPassword = await bcrypt.hash(userPassword, saltRounds);
    } catch (err) {
      console.error(err);
      return res.json({ message: 'Error hashing password.' });
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

      axios.post('http://localhost:3000/api/user/sendVerification', {
        userName: userName,
        userEmail: userEmail,
      })
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.error(error);
      });

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
