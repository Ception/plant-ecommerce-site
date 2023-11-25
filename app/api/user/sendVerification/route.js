'use strict';

import Verification from "../../../../lib/databases/models/verification";
import Users from "../../../../lib/databases/models/users";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

const res = NextResponse;

export async function POST(req) {
    const data = await req.json();
    const userName = data.userName;
    const userEmail = data.userEmail;

    const verificationToken = uuid();
    const verificationExpiry = new Date();

    try {
        const user = await Users.findOne({ where: { UserName: userName, UserEmail: userEmail } });
        if (!user) {
            return res.json({ message: 'User not found.' });
        } else {
            const verify = await Verification.create({ UserID: user.UserID, UserToken: verificationToken, UserTokenExpiry: verificationExpiry, Verified: 0 });
        }
    } catch (err) {
        console.error(err);
        return res.json({ message: 'Error sacing verification token.' });
    }

    // Send email with verification token
    const link = `http://localhost:3000/api/user/verify?token=${verificationToken}`;
    console.log("link is: " + link)

    return res.json({ message: 'sendVerification' });
}