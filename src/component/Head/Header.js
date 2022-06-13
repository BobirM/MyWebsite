import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"
import menu from "../pic/icons8-menu-24.png"
import canel from '../pic/icons8-close-24.png'

const Header = () => {
	// fixed Header
	window.addEventListener("scroll", function () {
		const header = document.querySelector(".header")
		header.classList.toggle("active", window.scrollY > 50)
	})
	// Toogle Menu
	const [Mobile, setMobile] = useState(false)
	return (
		<>
			<header className='header'>
				<div className='container d_flex'>
					<div className='logo'>
						<img src={logo} alt='' style={{ width: '58px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
					</div>

					<div className='navlink'>
						<ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
							
							<li>
								<a href='#hobbies'>hobbies</a>
							</li>
							<li>
								<a href='#portfolio'>portfolio</a>
							</li>
							<li>
								<a href='#resume'>resume</a>
							</li>
							
							<li>
								<a href='#contact'>contact</a>
							</li>
							<li>
							<a href='#home' className="home-btn">home</a>
							</li>
						</ul>

						<button className='toggle' onClick={() => setMobile(!Mobile)}>
							{Mobile ?
								<i className='fas fa-times close home-btn'><img src={canel} alt="" /></i> :
								<i className='fas fa-bars open'><img src={menu} alt="" /></i>
							}
						</button>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
