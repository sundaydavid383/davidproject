import React, { useRef, useEffect } from 'react'
import office from '../../assets/office1.png'
import "./hero.css"

const Hero = () => {

  const observer = useRef(null)



  useEffect(() => {
    observer.current = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add("animation")
          observer.current.unobserve(entry.target)
        }
        else{
          entry.target.classList.remove("animation")
        }
      })
},{threshold:.2})


    document.querySelectorAll(".anime").forEach(el=>observer.current.observe(el))
    return () => {
      if (observer.current) {
        document.querySelectorAll(".anime").forEach((em) => observer.current.unobserve(em));
      }
    };
  }, [])
  




  return (
    <div className='hero container'>
  <div className="text">
  <div className="collection anime">New Collection 2025</div>
  <h1 className='anime'>Discover Stylish Fashion For Every Season</h1>
  <p  className='intro anime'>Welcome to rccgWorks, your premier destination for career advancement. Our platform connects job seekers with top employers across various industries, offering a seamless job search experience tailored to your professional aspirations.  take the next step in your career journey with confidence.</p>

<p  className='intro anime'>At rccgWorks, we believe in empowering individuals to achieve their career goals. Our user-friendly platform provides access to a diverse range of job listings, company reviews. Join our community and unlock your potential with rccgWorks..</p>
  <div className="buttons anime">
    <button className="btn">Apply Now</button>
    <button className="btn btn_light">View Jobs</button>
    </div>
    <div className="featured">
    <span  className='anime'>
  <i class="fa fa-briefcase"></i>
  <p>Job Listings</p>
</span>
<span className='anime'>
  <i class="fa fa-file-text"></i>
  <p>Resume Builder</p>
</span>
<span  className='anime'>
  <i class="fa fa-bell"></i>
  <p>Job Alerts</p>
</span>  </div>
  </div>

<div className="image">
  <img  className='anime' src={office} alt="Office environment" />
  <div className="networking-opportunities anime">
  <i class="fa fa-users"></i>
  <p>Expand your professional network.</p>
</div>
<div className="company-reviews anime">
  <i class="fa fa-building"></i>
  <p>Read employer reviews.</p>
</div>
<div className="application-tracking anime">
  <i class="fa fa-tasks"></i>
  <p>Track your job applications.</p>
</div>

</div>
    </div>
  )
}

export default Hero
