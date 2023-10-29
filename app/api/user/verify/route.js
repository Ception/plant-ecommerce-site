'use strict'

import Verification from "../../../../lib/databases/models/verification";
import { NextResponse } from "next/server";

const res = NextResponse;

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token || token === '' || token === undefined || token === null) {
        return res.json({ message: 'token parameter is required.' });
    }

    const verification = await Verification.findOne({ where: { UserToken: token } });

    if (!verification) {
        return res.json({ message: 'Invalid token.' });
    }

    return res.json({ message: 'verified' });
}