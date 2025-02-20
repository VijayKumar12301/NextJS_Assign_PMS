import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(req) {
    console.log("welcome");
    const newUser= await req.json();
    console.log(newUser.username, newUser.email, newUser.address, newUser.phone, newUser.password );
    

    const res = await prismaClient.newUser.create({
        data: {
            username: newUser.username,
            email: newUser.email,
            address: newUser.address,
            phone: newUser.phone,
            password: newUser.password
        }
    })
    
    return NextResponse.json({ "user": res });
    
}