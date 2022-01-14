import React,{useEffect} from 'react'
import Footer from './components/Footer'
import  Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import ScrollToTop from './components/ScrollToTop'
import Testimonials from './components/Testimonials'
import Products from './components/Products'
import Newletter from './components/Newletter'
import Services from './components/Services'
import ScrollReveal from 'scrollreveal'
export default function App() {
  useEffect(()=>{
const sr = ScrollReveal({
  origin :"top",
  distance : "80px",
  duration : 2000,
  reset : false
});
sr.reveal(
  `
    nav,
    #home,
    #services,
    #portfolio,
    #testimonials,
    #products,
    #newletter,
    .footer
`,
  {
    opacity: 0,
    interval: 200,
  }
);
}, []);

  
  return (
   <>
   <ScrollToTop/>
   <Navbar/>
   <Hero/>
   <Services/>
   <Portfolio/>
   <Testimonials/>
   <Products/>
   <Newletter/>
   <Footer/>
   </>
  );
}
