import React from "react"
import './style.scss';
import Recycle from "./recycle.png";
import Trash from "./Trash.png"

//basic about statement that also types out in front of the user for a little extra style points
const About = () => {
  return(
    <div className = "base-container">
      <div className = "header">
        <h>SCU Marketplace</h>
      </div>
      <div className = "description">
        <p>
          Welcome to Santa Clara University Marketplace, an online platform designed by SCU students for SCU students. You can buy or sell anything that interests you on this website with the added security that you are buying from people in your local community.
        </p>
      </div>

      <div className = "header">
        <h1>The Problem</h1>
      </div>
      <div className = "description">
        <img class = "Text-Wrap-Left"
            src={Trash}
            width="100px"
            height="100px"
            alt="SCU"
        />
        <p>
          At the end of every school year, seniors are tasked with a difficult decision regarding their belongings. Do they make a run to the dump to throw them all away? Do they contact friends to see if they need any used furniture or appliances? Oftentimes seniors do not have the extra time to seek out buyers, so they end up spending money to throw away perfectly functional goods.
        </p>
      </div>

      <div className = "header">
        <h1>Our Mission</h1>
      </div>
      <div className = "description">
        <img class = "Text-Wrap-Right"
            src={Recycle}
            width="100px"
            height="100px"
            alt="SCU"
        />
        <p>
          One of the biggest transitions for college students is trying to live independently while on a budget. At SCU Marketplace, new students are able to acquire cheap used goods, and graduating students are able to make some quick money. In the long run, we hope to reduce our carbon footprint here at SCU by turning one student's trash into another student's belongings.
        </p>
      </div>
    </div>
  )
}

export default About
