import prisma from "@/lib/prisma";

export async function GET(){
    const data = await prisma.category.findMany()
    return Response.json({
        data
    })
}

export async function POST(req: Request){
    try {
        const { name } = await req.json()
        const newCategory = await prisma.category.create({
            data: {
                name: name
            }
        })
        return Response.json({
            message: "Create new category successful",
            newCategory
        })

    } catch (error){
        return new Response(error)
    }
}