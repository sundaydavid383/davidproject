import {useEffect, useRef} from 'react'
import "./features.css"

const Features = () => {
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
        document.querySelectorAll(".anime").forEach((el) => observer.current.unobserve(el));
      }
    };
  }, [])
  
  return (
<div className="features container">
<div class="feature anime ">
    <i class="fa fa-search" aria-hidden="true"></i>
    <h3>AI-Powered Job Matching</h3>
    <p>Utilize advanced artificial intelligence to analyze user profiles and recommend job opportunities that align with individual skills and experiences, enhancing the job search process.</p>
  </div>
  <div class="feature anime">
    <i class="fa fa-building" aria-hidden="true"></i>
    <h3>Employer Transparency</h3>
    <p>Provide insights into company recruiting practices, highlighting employers who maintain timely communication and preparedness during interviews, thereby promoting a positive candidate experience.</p>
  </div>
 
  <div class="feature anime">
    <i class="fa fa-user-secret" aria-hidden="true"></i>
    <h3>Anonymous Job Browsing</h3>
    <p>Allow users to explore job listings anonymously, revealing their identities only when expressing interest, thus maintaining privacy and encouraging candid exploration of opportunities.</p>
  </div>
</div>
  )
}

export default Features
