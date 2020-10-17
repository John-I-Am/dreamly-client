import React from 'react';
import Footer from '../components/Footer'

import Lottie from 'react-lottie'
import heroImage from '../assets/astronaut.json'
import asset1 from '../assets/icon1.png'
import asset2 from '../assets/icon2.png'
import asset3 from '../assets/icon3.png'
import asset4 from '../assets/icon4.png'
import asset5 from '../assets/icon5.png'
import asset6 from '../assets/icon6.png'

import { Link } from 'react-router-dom'

const HomePage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (document.getElementById("homeNav")) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("homeNav").style.top = "30px";
      } else {
        document.getElementById("homeNav").style.top = "-30px";
      }
      prevScrollpos = currentScrollPos;      
    }
  }  

  return (

    <div className='homePage'>
      <div>      
        <ul className='homeNav' id='homeNav'>
          <li ><a href='#section2'>Features</a></li>
          <li ><a href="#section3  ">How-tos </a></li>
          <li ><Link to="/login">Login</Link></li>
        </ul> 
      </div>

      <div id='section1'>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>

        <div className='quoteBox'>
          <h2>Lucid Dreaming</h2>
          <p>
              "The art of lucid dreaming is the art of being able to control your surroundings in the dream itself. 
              People who lucid dream can usually control everything that happens in their dream. They can teleport,
               fly, make something appear, or even make everything disappear. Regular lucid dreamers usually do so for 
                spiritual reasons but there certainly are people who do it for fun or to avoid bad dreams." <br/>
                <br/>
            -Wikipedia
        </p>           
        </div>

        <div className='heroImage'>
          <Lottie options={defaultOptions}/>
          <h3>Explore Your Subconscious. Become an Oneironaut.</h3>  
        </div>

      </div>

      <div id='section2'>
        <div>
          <img src={asset1} alt=''></img>
          <p>Log and organize. <b>Reminisce.</b> </p> 
        </div>

        <div>
            <img src={asset2} alt=''></img>
            <p>Save to the cloud. <b>Secure.</b> </p> 
        </div>

        <div>
            <img src={asset3} alt=''></img>
            <p>Track and analyse. <b>Learn.</b> </p> 
        </div>

        <div>
            <img src={asset4} alt=''></img>
            <p>Schedule reality checks. <b>Remind.</b> </p> 
        </div>

        <div>
            <img src={asset5} alt=''></img>
            <p>Style your dashboard. <b>Customize.</b> </p> 
        </div>

        <div>
            <img src={asset6} alt=''></img>
            <p>Grow your mind. <b>Transform.</b></p> 
        </div>

      </div>
        <h2 className="how2">How-to: <b>Lucid Dream?</b></h2>
      <div id='section3'>

        <div>
          <h3>Keep A Dream Journal</h3>
          <p> Any time you wake up from a sleep, log as much of your dream as you can possibly remember. 
              Be vigilant for objects, and events that appear often. These will be your dream signs</p>
        </div>

        <div>
          <h3>Do reality checks</h3>
          <p>Take a minute to observe your surroundings, and question your reality. 
            Try to force your finger through your palm. Is the sky suddenly pink? Change the colour of your 
            pants at will. Do a minimum of 10 checks a day.</p>
        </div>

        <div>
          <h3>WBTB (Wake Back To Bed)</h3>
          <p>Set your alarm clock to wake you up after 6 hours of sleep. Occupy yourself for 15 minutes then go back to bed.</p>
        </div>

        <div>
          <h3>MILD (Mnemonic Induction of Lucid Dreams)</h3>
          <p>As you are falling asleep, Tell yourself that you will lucid dream. Repeat a mantra such as "I will lucid dream".</p>
        </div>

      </div>
      <Footer/>
    </div>

  )
}

export default HomePage;
