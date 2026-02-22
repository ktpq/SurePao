
import React from 'react'
import CategoryFilter from '../components/CategoryFilter'
import ProductCard from '../components/ProductCard'

import { Search } from 'lucide-react'

export default function DiscoverPage({allProduct}) {
  return (
    <section className='center-content py-14'>
        <h1 className='text-3xl font-bold'> Discover Skincare </h1>
        <p className='mt-3 text-primary'> Analyze ingredients and find the perfect match for your skin </p>


        <section className='flex space-x-5 py-4 max-xl:flex-col'>

          {/* sidebar */}
          <aside className='w-[300px] p-4 max-xl:w-full'>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'> Filters </h3>
                <button className="text-primary px-2 py-2 hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">
                    Clear All
                </button>
            </div>
            <CategoryFilter/>
            
          </aside>

          {/* right content */}
          <div className='flex-1 p-4 items-center'>
              <div className='relative'>
                  <input type="text" className='border w-full border-gray-300 py-2 rounded-lg pl-15 pr-7 bg-white focus:outline-none' placeholder='Search products or brands...'/>
                  <Search color='#8013eb' className='absolute top-2 left-5'/>
              </div>
              {/* product container */}
              <div className='grid grid-cols-3 gap-10 my-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {allProduct.map((prod) => (
                    <ProductCard key={prod.id} product={prod}/>
                ))}
              </div>
              <div>

              </div>
          </div>

        </section>
      </section>
  )
}
