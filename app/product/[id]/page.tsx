import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer';
import { Bot, SendHorizonal, SprayCan, FlaskConical, Droplet } from 'lucide-react';

export default function page() {
  return (
    <main>
      <Navbar />
      <section className='center-content py-14 flex space-x-4 items-start max-lg:flex-col'>

        {/* img section left side */}
        <div className='bg-[#faf7fe] p-4 w-fit shadow-md max-lg:mx-auto max-lg:mb-5'>
          <img src="../hero-img.png" alt="" width={300} />
        </div>

        <div className='flex-1 p-4 flex flex-col space-y-4 max-lg:text-center'>
          <h2 className='text-2xl font-bold text-primary'> BRAND NAME </h2>
          <h1 className='mt-3 text-4xl font-bold'> Daily Moisturizing Lotion </h1>
          <p className='font-semibold'> Full Ingredients List </p>
          <p className='bg-white p-4 rounded-xl shadow-md hover:shadow-lg duration-200'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolor facilis voluptas? Rerum temporibus, natus eos laboriosam perferendis, consequuntur dolorem quod saepe sint iusto accusantium suscipit eius sit libero modi magni nemo quae facilis tempore? Molestiae quia corrupti culpa suscipit omnis et a consectetur! Harum earum corrupti itaque eius minima!
          </p>

          {/* chatbot section */}
          <section className='mt-5'>
            <div>

              {/* Header: Icon + Title */}
              <div className="flex items-center gap-2 mb-4">
                <div className="text-primary">
                  <Bot size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">AI Assistant</h2>
              </div>

              {/* Chat Box Container */}
              <div className="w-full bg-primary/5 border border-primary/10 rounded-[2rem] p-4 md:p-8 min-h-[300px] flex flex-col justify-end">
                {/* Input Area */}
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    className="w-full bg-white border-none rounded-2xl py-4 pl-6 pr-14 shadow-sm text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />

                  {/* Send Button */}
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform cursor-pointer p-1">
                    <SendHorizonal size={24} />
                  </button>
                </div>

              </div>

            </div>
          </section>

        </div>
      </section>

      {/* ingredient status section */}
      <section className='center-content mb-10'>
        <h2 className='font-semibold text-2xl'> Ingredient Status </h2>
        <div className="grid grid-cols-3 gap-4 mt-5 max-md:grid-cols-1">

          {/* Card 1: Left */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-sm p-10 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-emerald-500 bg-emerald-50 mb-6">
              <SprayCan size={24} />
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
              FRAGRANCE STATUS
            </p>
            <p className="text-xl font-bold text-slate-700">
              Not Detected
            </p>
          </div>

          {/* Card 2: Middle (Primary Color) */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-sm p-10 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-primary bg-primary/10 mb-6">
              <FlaskConical size={24} />
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
              ALCOHOLS STATUS
            </p>
            <p className="text-xl font-bold text-slate-700">
              Not Detected
            </p>
          </div>

          {/* Card 3: Right */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-sm p-10 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-emerald-500 bg-emerald-50 mb-6">
              <Droplet size={24} />
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
              SILICONES STATUS
            </p>
            <p className="text-xl font-bold text-slate-700">
              Not Detected
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
