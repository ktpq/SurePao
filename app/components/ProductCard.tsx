import React from 'react'

export default function ProductCard({ product }) {
  return (
    // 1. เพิ่ม flex flex-col และ h-full เพื่อให้ Card ยืดเต็มความสูง
    <div className="bg-white border border-slate-100 rounded-3xl p-5 group transition-all hover:shadow-xl hover:border-transparent flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative aspect-[1/1.2] bg-[#F8F9FB] rounded-2xl mb-6 flex items-center justify-center overflow-hidden shrink-0">
        <span className="absolute top-4 right-5 text-[10px] font-bold text-slate-800 uppercase tracking-widest z-10 bg-white px-2 py-0.5 rounded-2xl shadow-sm">
          {product.category.name}
        </span>
        
        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
          <img 
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Product Info */}
      {/* 2. ใช้ min-h เพื่อจองพื้นที่ชื่อสินค้า และ line-clamp เพื่อให้ชื่อยาวไม่ดันปุ่มเสียทรง */}
      <div className="flex-grow">
        <h4 className="font-bold text-xl mb-6 text-slate-800 px-1 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h4>
      </div>
      
      {/* 3. mt-auto จะดันกลุ่มปุ่มลงไปด้านล่างสุดเสมอ */}
      <div className="flex items-center justify-between gap-3 mt-auto pt-2">
        <button className="text-sm font-bold text-primary px-2 py-2 hover:bg-primary/5 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
          Details
        </button>
        
        <button className="btn-primary flex-1 py-2.5 px-4 text-[11px] uppercase tracking-widest font-bold rounded-xl bg-primary text-white hover:bg-primary/90 transition-all">
          Compare
        </button>
      </div>
    </div>
  )
}