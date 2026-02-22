import prisma from "@/lib/prisma";

export async function GET(){
    try {
        const data = await prisma.product.findMany({
            include: {
                category: true
            }
        });
        return Response.json(
            data
        )
    } catch (error){
        return new Response(error)
    }
}

export async function POST(req: Request){
    // create new product
    try {
        const { name, image_url, ingredientList, isFragance, isAlcohol, isSilicones, brandName, categoryName } = await req.json()
        const newProduct = await prisma.product.create({
            data: {
                name,
                image_url,
                ingredientList,
                isFragance,
                isAlcohol,
                isSilicones,
                brand: {
                    connectOrCreate : {
                        where: { name: brandName },
                        create: { name: brandName }
                    }
                },
                category: {
                    connectOrCreate: {
                        where: { name: categoryName },
                        create: { name: categoryName }
                    }
                }
            },
            
        })
        return Response.json({
            message: "Create new product successfully",
            newProduct
        })
    } catch (error){
        return new Response(error)
    }
}