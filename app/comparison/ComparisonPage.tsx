'use client'
import React, { useState } from 'react'
import { Search, X } from 'lucide-react'

// ข้อมูลจำลองสำหรับแสดงใน Modal
const mockProducts = [
    { id: 1, brand: 'THE ORDINARY', name: 'Niacinamide 10% + Zinc 1%', category: 'Serum', img: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg' },
    { id: 2, brand: 'THE ORDINARY', name: 'Niacinamide 10% + Zinc 1%', category: 'Serum', img: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg' },
    { id: 3, brand: 'THE ORDINARY', name: 'Niacinamide 10% + Zinc 1%', category: 'Serum', img: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg' },
    { id: 4, brand: 'THE ORDINARY', name: 'Niacinamide 10% + Zinc 1%', category: 'Serum', img: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg' },
];

export default function ComparisonPage() {
    // State สำหรับควบคุมการเปิด/ปิด Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className='center-content py-14'>
            <h1 className='text-3xl font-bold'> Product Comparison </h1>
            <p className='mt-3 text-primary'> Analyzing ingredient efficacy and safety profiles side-by-side. </p>

            <div className="relative flex items-center justify-center gap-4 w-full mx-auto py-10">
                {/* กล่องสินค้าฝั่งซ้าย */}
                <div className="flex-1 flex flex-col items-center justify-center h-[400px] border-2 border-dashed border-purple-200 rounded-xl bg-white">
                    <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                        <span className="text-[#8013eb] text-5xl font-light mb-1">+</span>
                    </div>
                    {/* ผูกฟังก์ชันเปิด Modal เมื่อคลิก */}
                    <button onClick={() => setIsModalOpen(true)} className="px-8 py-2.5 btn-primary font-light">
                        Select Product
                    </button>
                </div>

                {/* ตัวคั่น VS ตรงกลาง */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-dashed border-purple-200 rounded-full flex items-center justify-center text-[#8013eb] text-sm font-medium z-10">
                    vs
                </div>

                {/* กล่องสินค้าฝั่งขวา */}
                <div className="flex-1 flex flex-col items-center justify-center h-[400px] border-2 border-dashed border-purple-200 rounded-xl bg-white">
                    <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                        <span className="text-[#8013eb] text-5xl font-light mb-1">+</span>
                    </div>
                    {/* ผูกฟังก์ชันเปิด Modal เมื่อคลิก */}
                    <button onClick={() => setIsModalOpen(true)} className="px-8 py-2.5 btn-primary font-light">
                        Select Product
                    </button>
                </div>
            </div>

            <p className='mx-auto w-fit px-4 py-1 bg-purple-100 rounded-xl text-gray-500 font-light'> Add two products to compare their ingredients and safety profiles. </p>

            {/* ================= MODAL SECTION ================= */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    {/* กล่อง Modal */}
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[85vh]">
                        
                        {/* Header ของ Modal */}
                        <div className="p-6 pb-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-900">Select Product to Compare</h2>
                                <button 
                                    onClick={() => setIsModalOpen(false)} 
                                    className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* ช่อง Search (ตั้งใจไม่ให้มีขอบสีตอน focus ตามที่ขอ) */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8013eb]" size={20} />
                                <input 
                                    type="text" 
                                    placeholder="Search skincare products..." 
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-gray-300 focus:ring-0 text-gray-700 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* เส้นคั่น */}
                        <div className="h-px w-full bg-gray-200"></div>

                        {/* รายการสินค้า (Scroll ได้) */}
                        <div className="p-6 pt-4 overflow-y-auto flex-1 flex flex-col gap-4">
                            {mockProducts.map((product, index) => (
                                <div key={index} className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                                    {/* รูปสินค้าจำลอง */}
                                    <div className="w-16 h-16 border border-gray-200 rounded-lg flex items-center justify-center p-2 bg-white shrink-0">
                                        <div className="w-6 h-10 bg-gray-200 rounded-sm"></div> {/* โครงขวดจำลอง */}
                                    </div>
                                    
                                    {/* ข้อมูลสินค้า */}
                                    <div className="flex flex-col">
                                        <span className="text-[#8013eb] text-xs font-bold uppercase tracking-wider">{product.brand}</span>
                                        <span className="text-sm font-bold text-gray-900 mt-0.5">{product.name}</span>
                                        <span className="text-xs text-gray-500 mt-1">{product.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </section>
    )
}