import React, { useEffect } from 'react'
import Nav from './component/nav/Nav'
import Hero from './component/hero/Hero'
import Footer from './component/footer/Footer'
import Features from './component/features/Features'
import Company from './component/company/company'

const App = () => {
    
  const fetchData =  async() => {
    try {
      const response = await fetch("http://localhost:3000/companies")
      if(!response.ok){
        throw new Error("unable to fetch companies data");
      }
      const data = await response.json()
      console.log(data.data)
    } catch (error) {
       alert("unable to fetch data", error.message)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  
   
  return (
    <div>
    <Nav/>
    <Hero/>
    <Features/>
    <Company/>
    <Footer/>
    </div>
  )
}

export default App