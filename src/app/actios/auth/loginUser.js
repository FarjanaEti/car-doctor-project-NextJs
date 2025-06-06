"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt"

export const loginUser = async (payload) => {

    const { email, password } = payload;

    const userCollection = dbConnect("test-user");
    const user = await userCollection.findOne({ email })

    if (!user) return null
    const isPasswordOK = bcrypt.compare(user.password, password)
    if (!isPasswordOK) return null

    return user;
}