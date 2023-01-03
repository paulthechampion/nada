import './css/App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import TagCase from "./components/TagCase"
import Footer from "./components/Footer"
import WeeCount from "./components/WeeCount"
import Sapay from "./components/Sapay"
import PhoneMenu from './components/PhoneMenu';
import { useMediaQuery } from 'react-responsive'




  
function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })

  

    
  return (
    <div className="App">
      <BrowserRouter>
        
              <div className="main-content">
                  <Header/>
                  <PhoneMenu/>
                  <Routes>
                      <Route exact path="/" element={<Home/>}/>   
                      <Route exact path="/tag-case" element={<TagCase/>}/> 
                      <Route exact path="/wee'count" element={<WeeCount/>}/> 
                      <Route exact path="/sapay" element={<Sapay/>}/> 
                  </Routes>    
              </div>
              <Footer/>
      </BrowserRouter>
    </div>
  );
}



window.addEventListener("load", function(){
  var bodyS = document.body.style
  bodyS.overflowX ="hidden"
  const appearOptions = {
      root:null,
      threshold:0,
      rootMargin:"0px 0px -150px 0px"
  }       

  const faders = document.querySelectorAll(".fade-in")
  const sliders = document.querySelectorAll(".slide-in")
  const serviceCheck = document.querySelectorAll(".serviceCheck")
  
  const appearOnScroll = new IntersectionObserver
  (function(
      entries,
      appearOnScroll
  ){
      entries.forEach(entry => {
          if(!entry.isIntersecting){
              return
          }else{
              entry.target.classList.add("appear")
              appearOnScroll.unobserve(entry.target)
          }
  
      })
  },appearOptions)
  
  
  faders.forEach(fader=>{
      appearOnScroll.observe(fader)
  })

  sliders.forEach(slider=>{
      appearOnScroll.observe(slider)
  })

  serviceCheck.forEach(slider=>{
    appearOnScroll.observe(slider)
})

});



export default App;
