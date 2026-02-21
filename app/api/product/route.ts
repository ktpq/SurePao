import prisma from "@/lib/prisma";

export async function GET(){
    const brands = await prisma.brand.findMany();
    return Response.json({
        brands
    })
}
