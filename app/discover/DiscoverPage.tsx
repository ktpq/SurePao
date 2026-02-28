'use client'
import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation' // เพิ่ม useSearchParams
import { useDebounce } from '@/hooks/useDebounce'

import CategoryFilter from '../components/CategoryFilter'
import ProductCard from '../components/ProductCard'
import { Search } from 'lucide-react'

export default function DiscoverPage({allProduct, search}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [searchQuery, setSearchQuery] = useState(search || "")
  const debouncedSearch = useDebounce(searchQuery, 500)

  useEffect(() => {
    if (debouncedSearch !== search) {
      const params = new URLSearchParams(searchParams.toString())
      
      if (debouncedSearch) {
        params.set('search', debouncedSearch)
      } else {
        params.delete('search')
      }
      
      router.push(`?${params.toString()}`)
    }
  }, [debouncedSearch])

  const handleClearAll = () => {
    setSearchQuery("")
    router.push('/discover')
  };

  return (
    <section className='center-content py-14'>
        <h1 className='text-3xl font-bold'> Discover Skincare </h1>
        <p className='mt-3 text-primary'> Analyze ingredients and find the perfect match for your skin </p>

        <section className='flex space-x-5 py-4 max-xl:flex-col'>
          <aside className='w-[300px] p-4 max-xl:w-full'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'> Filters </h3>
                <button 
                  onClick={handleClearAll}
                  className="text-primary px-2 py-2 hover:bg-primary/5 rounded-lg transition-colors cursor-pointer"
                >
                    Clear All
                </button>
            </div>
            <CategoryFilter/>
          </aside>

          <div className='flex-1 p-4 items-center'>
              <div className='relative'>
                  <input 
                    type="text" 
                    className='border w-full border-gray-300 py-2 rounded-lg pl-15 pr-7 bg-white focus:outline-none' 
                    placeholder='Search products or brands...' 
                    value={searchQuery} // 4. อย่าลืมผูก value กับ state
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search color='#8013eb' className='absolute top-2 left-5'/>
              </div>
              
              <div className='grid grid-cols-3 gap-10 my-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {allProduct.map((prod) => (
                    <ProductCard key={prod.id} product={prod}/>
                ))}
              </div>
          </div>
        </section>
      </section>
  )
}