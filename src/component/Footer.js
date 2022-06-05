import React from "react"
import logo1 from "./pic/logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' style={{width:'58px',height:'60px',objectFit:'cover',borderRadius:'50%'}} />
          </div>
          <p>© 2022 All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
