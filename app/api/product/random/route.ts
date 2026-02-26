import prisma from "@/lib/prisma"

export async function GET() {
  try {
    // 1. ดึง ID ทั้งหมดของสินค้าที่มีอยู่ออกมา (ใช้ select เพื่อประหยัด RAM)
    const allIds = await prisma.product.findMany({
      select: { id: true }
    })

    // 2. สุ่มเลือก ID ออกมา 4 ตัวด้วย JavaScript
    // ป้องกันกรณีสินค้ามีน้อยกว่า 4 รายการ
    const shuffledIds = allIds
      .map((item) => item.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)

    // 3. ใช้ findMany ปกติ โดยดึงเฉพาะ ID ที่เราสุ่มมาได้ 
    // และใช้ include ได้ตามใจชอบเลย!
    const data = await prisma.product.findMany({
      where: {
        id: { in: shuffledIds }
      },
      include: {
        category: true // ดึงข้อมูลตาราง Category มาให้แบบอัตโนมัติ
      }
    })

    // 4. (Optional) เนื่องจาก ID ที่ได้จาก 'in' อาจจะไม่เรียงตามลำดับที่สุ่มไว้
    // ถ้าอยากให้ลำดับสุ่มจริงๆ ให้ shuffle อีกรอบที่นี่ได้ครับ
    const randomData = data.sort(() => 0.5 - Math.random())

    return Response.json(randomData)
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 })
  }
}
