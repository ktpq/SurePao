import React from 'react'
import axios from 'axios';
import prisma from '@/lib/prisma';

import ProductDetail from './ProductDetail';


export default async function page({params} : {params: Promise<{id: number}>}) {
  const { id } = await params
  const data = await axios.get(`http://localhost:3000/api/product/${id}`);
  const product = data.data
  
  
  return (
    <ProductDetail product={product}/>
  )
}
