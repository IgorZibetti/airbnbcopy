import { PrismaClient } from "@prisma/client";
import { isExportDeclaration } from "typescript";

declare global{
    var prisma: PrismaClient |undefined

}


const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV != 'production') globalThis.prisma = client

export default client;