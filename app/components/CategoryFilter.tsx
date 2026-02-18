'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CategoryFilter() {
  const [isOpen, setIsOpen] = useState(true);
  
  // รายการหมวดหมู่ตามรูปภาพ
  const categories = [
    "Cleanser",
    "Serum",
    "Moisturizer",
    "Cleansing"
  ];

  return (
    <div className="w-full max-w-[300px] space-y-4 mt-5">
      {/* Container หลัก */}
      <div className={`bg-white rounded-xl transition-all duration-300 ${isOpen ? 'p-6' : 'p-5'}`}>
        
        {/* Header - กดเพื่อเปิด/ปิด */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center cursor-pointer group"
        >
          <span className="text-xl font-bold text-slate-900">Category</span>
          <ChevronDown 
            className={`transition-transform duration-300 text-slate-900 ${isOpen ? 'rotate-180' : ''}`} 
            size={24} 
          />
        </button>

        {/* รายการ Checkbox (จะแสดงเมื่อ isOpen เป็น true) */}
        {isOpen && (
          <div className="mt-8 space-y-5">
            {categories.map((category) => (
              <label 
                key={category} 
                className="flex items-center gap-4 cursor-pointer group"
              >
                {/* Custom Checkbox */}
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none w-6 h-6 border-2 border-slate-200 rounded-md checked:bg-primary checked:border-primary transition-all cursor-pointer"
                  />
                  {/* เครื่องหมายถูก (แสดงเมื่อถูกเลือก) */}
                  <svg 
                    className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* ชื่อหมวดหมู่ */}
                <span className="text-lg font-medium text-slate-700 group-hover:text-primary transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}