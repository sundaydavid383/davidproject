import React, { useEffect, useState } from 'react'
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import image4 from "../../assets/image4.jpg"
import image5 from "../../assets/image5.jpg"
import image6 from "../../assets/image6.jpg"
import image7 from "../../assets/image7.jpg"
import image8 from "../../assets/image8.jpg"
import image9 from "../../assets/image9.jpg"
import image10 from "../../assets/image10.jpg"
import "./company.css"


const Company = () => {

    const [company, setCompany] = useState([])
    const [loading, setLoading] = useState(false)
    const [privPub, setPrivPub] = useState("public")
    const [publicInput, setPublicInput] = useState("")
    const [privateInput, setPrivateInput] = useState("")
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
    
        
      const fetchDataNopublic =  async() => {
        try {
          setLoading(true)
          const response = await fetch("http://localhost:3000/companies/no_public")
          if(!response.ok){
            throw new Error("unable to fetch companies data");
          }
          const data = await response.json()
          setLoading(false)
          console.log(data.data)
          setCompany(Array.isArray(data.data) ? data.data : [])
        } catch (error) {
          setLoading(false)
           alert("unable to fetch data", error.message)
        }
      }

      const fetchDatapublic =  async() => {
        try {
          setLoading(true)
          const response = await fetch("http://localhost:3000/companies/public")
          if(!response.ok){
            throw new Error("unable to fetch companies data");
          }
          const data = await response.json()
          console.log(data.data)
           setLoading(false)
          setCompany(Array.isArray(data.data) ? data.data : [])
        } catch (error) {
          setLoading(false)
           alert("unable to fetch data", error.message)
        }
      }

      const publicSubmit = async(e)=>{
        e.preventDefault()
            try {
              setLoading(true)
                const response = await fetch(`http://localhost:3000/public-comapanies/data/${publicInput}`)
                if(!response.ok){
                  throw new Error("unable to fetch companies data");
                }
                const data = await response.json()
                console.log(data.data)
                 setLoading(false)
                setCompany(Array.isArray(data.data) ? data.data : [])

            } catch (error) {
               alert("an error occured", error.message)
            }
      }
      const sortPrivate = async()=>{
    
            try {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
              }, 2000);
                const response = await fetch(`http://localhost:3000/sorted/private-comapanies`)
                if(!response.ok){
                  throw new Error("unable to fetch companies data");
                }
                const data = await response.json()
                console.log(data.data)
                 
                setCompany(Array.isArray(data.data) ? data.data : [])

            } catch (error) {
               alert("an error occured", error.message)
            }
      }
      const sortPublic = async()=>{
        
            try {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
              }, 2000);
                const response = await fetch(`http://localhost:3000/sorted/public-comapanies`)
                if(!response.ok){
                  throw new Error("unable to fetch companies data");
                }
                const data = await response.json()
                console.log(data.data)
                
                setCompany(Array.isArray(data.data) ? data.data : [])

            } catch (error) {
               alert("an error occured", error.message)
            }
      }
      const privateSubmit = async (e) => {
        e.preventDefault()
        try {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
          }, 2000);
            const response = await fetch(`http://localhost:3000/private-comapanies/data/${privateInput}`)
            if(!response.ok){
              throw new Error("unable to fetch companies data");
            }
            const data = await response.json()
            console.log(data.data)
             setLoading(false)
            setCompany(Array.isArray(data.data) ? data.data : [])

        } catch (error) {
           alert("an error occured", error.message)
        }
      }

      useEffect(() => {
        fetchDatapublic()
      }, [])
      

     


  return (
    <div className='company'>
      <div className="company_header">
      <span className={privPub === "public" ? "active" :""} onClick={()=>{fetchDatapublic(); setPrivPub("public")}}>Public Jobs</span>
      <span className={privPub === "private" ? "active" :""} onClick={()=>{fetchDataNopublic(); setPrivPub("private")}}>Private Jobs</span>
      </div>
{
  loading ? 
  <div className="loading container"> 
    {[...Array(10)].map((a,i)=>(
      <div className="card">
        <div className="image"></div>
        <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        </div>

      </div>
    ))}
</div>
:    
<div className="company_content container">
  {privPub === "private" ?<><form onSubmit={privateSubmit}  className="private form">
          <input onChange={(e)=>{setPrivateInput(e.target.value)}} type="text" placeholder="search for private company" />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form><div className="sort">
          <h3>Sort By</h3>
        <span onClick={sortPrivate}> Ratings <i class="fas fa-fire"></i></span>
        </div></>:
        <><form onSubmit={publicSubmit} className="public form">
        <input onChange={(e)=>{setPublicInput(e.target.value)}} type="text" placeholder="search for public company" />
        <button type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form><div className="sort">
          <h3>Sort By</h3>
          <span onClick={sortPublic}> Ratings <i class="fas fa-fire"></i></span>
        </div></>}

{company.length > 0 ? company.map((item, index)=>(
<div key={item.id} className='card'>
  {/* {images.map((a,i)=>(
      <img src={a} alt="" />
  ))} */}
  <div className="companyImage"><img src={images[index]} alt="" /></div>
  <div className="text">
    <h2>{item.name}</h2>
    <p>{item.industry}</p>
    <div className="employees">No of Employees: <span>{item.employees}</span></div>
    <div className="details">
      <div className="public">
        {item.is_public ? "it is publicly avialabel":"it is specifically for certified users"}
      </div>
      <div className="stars">
       {
        (()=>{
            const ratings = item.employees >= 80000 ? 5
                            :item.employees >= 60000 ? 4
                            :item.employees >= 40000 ? 3
                            :item.employees >= 20000 ? 2
                            : 1
                  
            return(
              [...Array(5)].map((_,i)=>(
                <i key={i} className={ratings > i ? "fa-solid fa-star":"fa-regular fa-star"}></i>
              ))
            )
        })()
       }
      </div>
      <div className='location'>
        <div className="city"><i class="fa-solid fa-flag"></i> {item.location.city}</div>
        <div className="country"><i class="fa-solid fa-city"></i>{item.location.country}</div>
      </div>
      <button onClick={()=>{}} className="btn">Apply</button>
    </div>
  </div>
</div>
))
:
<p className='noresult'>No Result Found</p>}
</div>
}
 </div>
  )
}

export default Company
