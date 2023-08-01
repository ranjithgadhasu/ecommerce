import React, {useEffect, useState } from 'react'
import Hero from '../../components/Hero' 
import Productss from '../../components/Productss/index'
import FeatureCard from '../../components/FeatureCard'
import Stats from '../../components/FeatureCard/StatistiCard'


const Home = () => {

const [products, setProducts] = useState( [] )
  useEffect (() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
     const data = await response.json()
     console.log(data)
     setProducts()
    }
   fetchProducts()
  }, [])
  return (
    <>
   <Hero/>  
   <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
    </div>
    {
     Productss.length > 0 ?
     <Productss products={products} />
    :
    <div>Loading.....</div>
}
 <Productss/>
 <FeatureCard/>
 <Stats/>
  </>
  )
} 

export default Home