import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ComparisonPage from './ComparisonPage'

export default function page() {
  return (
    <main>
        <Navbar/>
        <ComparisonPage/>
        {/* <Footer/> */}
    </main>
  )
}
