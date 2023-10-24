import mariadb from 'mariadb';
import { NextResponse } from "next/server";

const CONNECTION_INFO = {
    host: "localhost", 
    user: "root", 
    password: "root", 
    database: "weed",
    connectionLimit: 10,
    acquireTimeout: 20000
 }; 

const pool = mariadb.createPool(CONNECTION_INFO);

export async function GET(req) {
    const res = NextResponse;

    try {
        let conn = await pool.getConnection();
        const Query = await conn.query(
          "SELECT * FROM Product"
        );

        console.log("Quey is: ", Query)

        conn.release();

        return res.json({ success: true, message: Query || 'there was an error' });

      } catch (err) {
        console.error(`"[ERROR] ${err}"`);
        
      } 
}
