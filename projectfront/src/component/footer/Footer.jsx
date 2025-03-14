import { useRef, useEffect, useState } from "react";
import "./footer.css";
const Footer = () => {
  const [email, setEmail] = useState("");
  const observer = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.current.unobserve(entry.target);
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }
    );
    const elements = document.querySelectorAll(".futup");
    elements.forEach((em) => observer.current.observe(em));
    return () => {
      if (observer.current) {
        elements.forEach((em) => observer.current.unobserve(em));
      }
    };
  }, []);
  
  const onSubmit = (e)=>{
    const updateReciever = document.querySelector(".updateReciever")
    const emailLb = document.getElementById("emailLb");
    const regEmail = /^[A-Za-z0-9%._+-]{2,}@[A-Za-z0-9\-]{2,}\.[A-Za-z]{2,}$/;
    e.preventDefault();

    if (email === "") {
      emailLb.classList.add("alert");
      setTimeout(() => {
        emailLb.classList.remove("alert");
      }, 200);
      emailLb.textContent = "enter your email"
      return;
    }
    else if(!regEmail.test(email)){
      emailLb.classList.add("alert");
      setTimeout(() => {
        emailLb.classList.remove("alert");
      }, 2000);
      emailLb.textContent = "enter a valid email address"
      return;
    }
    
    updateReciever.classList.add("active")
    setTimeout(() => {
      updateReciever.classList.remove("active")
    }, 7000);
          emailLb.textContent = ""
          setEmail("")
  }

  return (
    <div className="footer ">
      <div className="subscribe container_flex_between">
        <h2>Stay in Touch</h2>
        <form action="" className="form">
          <input type="text" placeholder="search for company" />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
        <div className="updateReciever">
          <span>You will now be receiving updates from us</span>
          <div onClick={()=>{document.querySelector(".updateReciever").classList.remove("active")}} className="btn"><p>Thank You</p></div>
        </div>
        <div className="socials">
          <a target="_blank" to="https://www.facebook.com/RCCGNewSprings">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a target="_blank" to="https://www.instagram.com/rccgnewspringsyouth/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a target="_blank" to="https://www.youtube.com/@RCCGNewSprings">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="main_footer container">
        <div className="main futup">
        <div className="logo">
          <span>AB</span>NATIONS<i className="fa-solid fa-building"></i>
        </div>
          <p>
            At Newspring Tim412, we are dedicated to guiding youth towards a
            deeper relationship with Jesus Christ. Our mission is to inspire and
            equip the next generation to live out their faith boldly, fostering
            a community rooted in love, service, and spiritual growth.
          </p>
        </div>
        <ul className="explore futup">
          <h2>Explore a</h2>
          <li>
            <a to="">
              <span></span>
              <i className="fa-solid fa-blog"></i>Blog
            </a>
          </li>
          <li>
            <a to="/about">
              <span></span>
              <i className="fa-solid fa-address-card"></i>About Us
            </a>
          </li>
          <li>
            <a to="/services">
              <span></span>
              <i className="fa-brands fa-servicestack"></i>Services
            </a>
          </li>
          <li>
            <a to="/contact">
              <span></span>
              <i className="fa-solid fa-id-badge"></i>Contact Us
            </a>
          </li>
        </ul>
        <div className="footer_details futup">
          <p>
            <small>
              <i className="fa-solid fa-phone"></i>
            </small>{" "}
            09014886877
          </p>
          <a target="_blank" href="https://wa.me/09014886853">
            <p>
              <small>
                <i className="fa-brands fa-whatsapp"></i>
              </small>{" "}
              +123 912 234 4565
            </p>
          </a>
          <a href="mailto:sundayudoh383@gmail.com">
            <p>
              <small>
                <i className="fa-solid fa-envelope"></i>
              </small>{" "}
              Tim412@gmail.com
            </p>
          </a>
          <a
            target="_blank"
            to={
              "https://www.google.com/maps/search/RCCG+NewSprings,+The+Capital+Building,+332+Ikorodu+Road,+Idiroko+Bus+Stop,+Maryland,+Lagos/@6.5643569,3.3673699,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            <p>
              <small>
                <i className="fa-solid fa-location-dot"></i> Address:
              </small>{" "}
              The Capital Building, 332 Ikorodu Road, Lagos, Nigeria 100211
            </p>
          </a>
        </div>
      </div>
      <div className="copyright">
        @2024 All Rights Copyright <span>Tim 412</span>. Design & Developed By
        DavidFoster.
      </div>
    </div>
  );
};

export default Footer;
