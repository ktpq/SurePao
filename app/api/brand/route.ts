import prisma from "@/lib/prisma";

export async function GET(){
    const data = await prisma.brand.findMany()
    return Response.json({
        data
    })
}

export function POST(){

}