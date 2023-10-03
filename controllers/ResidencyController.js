import asyncHandler from "express-async-handler"

import { prisma } from "../config/prismaConfig.js"

export const createResidency = asyncHandler(async (req, res) => {

    const { title, description, price, address, city, country, image, facilities, userEmail } = req.body.data
    console.log("endpoint created");
})

