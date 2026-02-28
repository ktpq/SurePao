import axios from 'axios'
import prisma from '@/lib/prisma'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DiscoverPage from './DiscoverPage'


export default async function page({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const { search } = await searchParams
  const data = await prisma.product.findMany({
    where: {
      OR: search ? [
        { name: { contains: search, mode: 'insensitive' } },
        { brand: { name: { contains: search, mode: 'insensitive' } } }
      ] : undefined
    },
    include: {
      category: true,
      brand: true
    }
  })
  console.log(data)
  return (
    <main>
      <Navbar />
      {/* content section */}
      <DiscoverPage allProduct={data} search={search} />
      <Footer />
    </main>
  )
}
