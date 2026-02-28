import prisma from "@/lib/prisma";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DiscoverPage from './DiscoverPage'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const resolvedParams = await searchParams;
  const search = resolvedParams.search;
  
  // แปลง category จาก "Serum,Cleanser" เป็น Array ['Serum', 'Cleanser']
  const categoriesArray = resolvedParams.category ? resolvedParams.category.split(',') : undefined;

  // 2. ดึงข้อมูลจาก Database
  const data = await prisma.product.findMany({
    where: {
      OR: search ? [
        { name: { contains: search, mode: 'insensitive' } },
        { brand: { name: { contains: search, mode: 'insensitive' } } }
      ] : undefined,
      
      category: categoriesArray ? {
        name: { in: categoriesArray }
      } : undefined
    },
    include: {
      category: true,
      brand: true
    }
  });

  return (
    <main>
      <Navbar />
      <DiscoverPage allProduct={data} search={search} />
      <Footer/>
    </main>
  )
}