import React from "react"
import "./Home.css"
import hero from "../pic/p1.png"
import telegram from "../pic/telegram.png"
import instagram from "../pic/instagram.png"
import email from "../pic/email.png"
import javascript from "../pic/javascript.png"
import react from "../pic/react.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Bobir</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Frontend Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <a href="https://t.me/web_dev_B" class='fab fa-facebook-f' ><img src={telegram} alt="" /></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://instagram.com/programmer9794" class='fab fa-instagram'><img src={instagram} alt="" /></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://boburm029@gmail.com" class='fab fa-telegram'><img src={email} alt="" /></a>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                <a href="https://reactjs.org" class='fab fa-facebook-f' > <img src={react} alt=''/></a>
                </button>
                <button className='btn_shadow'>
                  <a href="https://www.javascript.com"><img src={javascript} alt='' /></a>
                </button>
                <button className='btn_shadow'>
                  <a href="https://figma.com"><img src={skill3} alt='' /></a>
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
