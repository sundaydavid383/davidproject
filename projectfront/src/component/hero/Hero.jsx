import React from 'react'
import office from '../../assets/office1.png'
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero container'>
<div className="text">
  <div className="collection">New Collection 2025</div>
  <h1>Discover Stylish Fashion For Every Season</h1>
  <p>Welcome to rccgWorks, your premier destination for career advancement. Our platform connects job seekers with top employers across various industries, offering a seamless job search experience tailored to your professional aspirations.  take the next step in your career journey with confidence.</p>

<p>At rccgWorks, we believe in empowering individuals to achieve their career goals. Our user-friendly platform provides access to a diverse range of job listings, company reviews. Join our community and unlock your potential with rccgWorks..</p>
  <div className="buttons">
    <button className="btn">Apply Now</button>
    <button className="btn btn_light">View Jobs</button>
    </div>
    <div className="featured">
    <span>
  <i class="fa fa-briefcase"></i>
  <p>Job Listings</p>
</span>
<span>
  <i class="fa fa-file-text"></i>
  <p>Resume Builder</p>
</span>
<span>
  <i class="fa fa-bell"></i>
  <p>Job Alerts</p>
</span>  </div>
  </div>

<div className="image">
  <img src={office} alt="Office environment" />
  <div className="networking-opportunities">
  <i class="fa fa-users"></i>
  <p>Expand your professional network.</p>
</div>
<div className="company-reviews">
  <i class="fa fa-building"></i>
  <p>Read employer reviews.</p>
</div>
<div className="application-tracking">
  <i class="fa fa-tasks"></i>
  <p>Track your job applications.</p>
</div>

</div>
    </div>
  )
}

export default Hero
