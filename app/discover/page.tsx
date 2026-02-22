import axios from 'axios'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DiscoverPage from './DiscoverPage'

export default async function page() {
  const res = await axios.get("http://localhost:3000/api/product");
  const data = res.data
  console.log(data)
  return (
    <main>
      <Navbar />
      {/* content section */}
      <DiscoverPage allProduct= {data}/>
      <Footer/>
    </main>
  )
}
