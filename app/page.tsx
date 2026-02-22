import React from 'react'

import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

import Image from 'next/image'
import { Search, FlaskConical, Sparkles, Github } from 'lucide-react'

export default function page() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24 mt-5">
        <div className="center-content flex flex-col md:flex-row items-center justify-between gap-12 max-lg:text-center">

          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight text-[#111827]">
              Smart Ingredient <br />
              Analysis for <br />
              <span className="text-primary">Healthier Skin</span>
            </h1>

            <p className="text-[#4B5563] text-lg md:text-xl max-w-lg leading-relaxed">
              Decode the science behind your skincare. Instant ingredient
              breakdowns and smarter companions for a glowing complexion.
            </p>

            <button className="btn-primary px-10 py-4 text-md max-lg:mx-auto">
              Start Analyzing
            </button>
          </div>

          {/* Right Image Container */}
          <div className="flex-1 relative w-full max-w-[500px] max-lg:hidden">
            {/* ส่วนของเงาและกรอบรูปที่ทำให้เหมือนในต้นฉบับ */}
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src="/hero-img.png" // เปลี่ยนชื่อไฟล์ตามที่คุณต้องการ
                alt="Smart Ingredient Analysis"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* How it works section */}
      <section className="py-24 bg-white">
        <div className="center-content mx-auto px-6 md:px-20">
          {/* Header */}
          <div className="mb-16">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">The Process</span>
            <h2 className="text-4xl font-bold mt-3">How it Works</h2>
            <p className="text-slate-400 mt-4 text-lg">Our simple three-step process to help you understand what you're putting on your skin.</p>
          </div>

          {/* Steps Grid */}
          <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-8">
            <StepCard
              icon={<Search className="text-primary" size={24} />}
              title="Search Product"
              desc="Find any product in our extensive database of 50,000+ items instantly by name or brand."
            />
            <StepCard
              icon={<FlaskConical className="text-primary" size={24} />}
              title="Decode Ingredients"
              desc="We break down complex chemical names into simple terms, highlighting irritants and allergens."
            />
            <StepCard
              icon={<Sparkles className="text-primary" size={24} />}
              title="Compare Ingredients"
              desc="Discover cleaner formulation alternatives that match your skin type preferences automatically."
            />
          </div>
        </div>
      </section>

      {/* Featured Clean Product Section */}
      <section className="py-24 bg-background">
        <div className="center-content">
          <div className="flex justify-between max-md:flex-col max-md:items-center max-md:space-y-4 items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">Featured Clean Products</h2>
              <p className="text-slate-500 mt-3 text-lg">
                Curated selections with transparent ingredient lists.
              </p>
            </div>
            <button className="text-primary font-bold hover:underline cursor-pointer transition-all">
              View all
            </button>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
            {/* {[1, 2, 3, 4].map((i) => (
              <ProductCard key={i} />
            ))} */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </main>
  )
}

function StepCard({ icon, title, desc }) {
  return (
    <div className="bg-[#f9fafb] p-10 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-slate-100 cursor-pointer">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  )
}

