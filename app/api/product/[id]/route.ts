import prisma from "@/lib/prisma"

export async function GET(request: Request, {params}: {params: Promise<{ id: number}>}){
    try{
        const { id } = await params
        const data = await prisma.product.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                category: true,
                brand: true
            }
        })

        return Response.json(data)

        
    } catch (error){
        return new Response(error)
    }
}