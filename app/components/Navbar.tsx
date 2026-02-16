import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-slate-50 font-main p-2">
      {/* ใช้คลาส container และจัดกึ่งกลางด้วย mx-auto */}
      <div className="center-content mx-auto flex justify-between items-center py-4">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img 
            src="./logo.svg" 
            alt="SurePao Logo" 
            className="w-8 h-8" 
          />
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            SurePao
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-10 max-lg:hidden">
          <li className=''>
            <a href="#" className="text-md font-semibold text-slate-600 hover:text-primary transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-md font-semibold text-slate-600 hover:text-primary transition-colors">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="text-md font-semibold text-slate-600 hover:text-primary transition-colors">
              Comparison
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}