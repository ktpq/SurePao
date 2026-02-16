import React from 'react'
import Image from 'next/image'

export default function ProductCard() {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-5 group transition-all hover:shadow-xl hover:border-transparent">
      {/* Image Container */}
      <div className="relative aspect-[1/1.2] bg-[#F8F9FB] rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
        <span className="absolute top-4 right-5 text-[10px] font-bold text-slate-800 uppercase tracking-widest z-10 bg-white px-2 rounded-2xl">
          Serum
        </span>
        
        {/* เปลี่ยนจาก object-contain เป็น object-cover เพื่อให้รูปเต็มกรอบ */}
        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
          <Image 
            src="/hero-img.png" 
            alt="Product Name"
            fill
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </div>

      {/* Product Info */}
      <h4 className="font-bold text-xl mb-6 text-slate-800 px-1">Product Name</h4>
      
      <div className="flex items-center justify-between gap-3">
        <button className="text-sm font-bold text-primary px-2 py-2 hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">
          Details
        </button>
        
        <button className="btn-primary flex-1 py-2.5 px-4 text-[11px] uppercase tracking-widest font-bold">
          Compare
        </button>
      </div>
    </div>
  )
}
