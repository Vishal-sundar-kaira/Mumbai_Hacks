import React from 'react'
import Navbar from './Navbar';  
import tridoshaimg from "./images/tridoshaimg.png"
const Info = () => {
  return (
    <>
      <section className="s1">
        <Navbar/>
        <div style={{ display:"flex"}} >
           <div className="r1" styel={{ flex:"2" }}>
             <h1>What is Dosha ?</h1>
             <h3>Ayurveda, the science of life, centers around Doshas, which represent natural energy principles derived from five elements (space, air, fire, water, and earth). Doshas, including Vata, Pitta, and Kapha, influence our constitution, health tendencies, and susceptibility to ailments. Take the quiz to find yours!</h3>
             <button>Take Quiz</button>
           </div>
           <div className="r1" style={{ flex:"1" }}>
            <img src={tridoshaimg} alt="" />
           </div>
        </div>
      </section>
      {/* <section className="s2">
      <div style={{ display:"flex"}} >
           <div className="r1" styel={{ flex:"1" }}>
             <img src={tridoshaimg} alt="" />
           </div>
           <div className="r1" style={{ flex:"1" }}>
             <p>

             </p>
           </div>
        </div>   
      </section> */}
    </>
  )
}

export default Info
