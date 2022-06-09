import React, { useState } from "react"
import contact1 from "./contact.jpg"
import "./Contact.css"
import telegram from '../pic/telegram.png'
import instagram from '../pic/instagram.png'
import email from '../pic/email.png'

const Contact = () => {
	const [data, setData] = useState({
		fullname: "",
		phone: "",
		email: "",
		subject: "",
		message: "",
	})

	const InputEvent = (event) => {
		const { name, value } = event.target

		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			}
		})
	}

	function save(){
		console.log(data.fullname);
	}
	const formSubmit = (event) => {
		event.preventDefault()
		alert(
			`My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
		)
		console.log({ data });
	}
	return (
		<>
			<section className='Contact' id='contact'>
				<div className='container top'>
					<div className='heading text-center'>
						<h4>CONTACT</h4>
						<h1>Contact With Me</h1>
					</div>

					<div className='content d_flex'>
						<div className='left'>
							<div className='box box_shodow'>
								<div className='img'>
									<img className="imgstyle" src={contact1} alt='' />
								</div>
								<div className='details'>
									<h1>Bobir Maxmadustov</h1>
									<p>I am ready to work for the development of the company. contact me via and call my account.</p> <br />
									<p>Phone: +998916331194</p>
									<p>Email: boburm029@gmail.com</p> <br />
									<span>FIND WITH ME</span>
									<div className='button f_flex'>
										<button className='btn_shadow'>
											<a className='fab fa-telegram-t' href="https://t.me/web_dev_B"><img src={telegram} alt="" style={{ width: '20px' }} /></a>
										</button>
										<button className='btn_shadow'>
											<a href="https://instagram.com/programmer9794" className='fab fa-telegram' ><img src={instagram} alt="" style={{ width: '20px' }} /></a>
											
										</button>
										<button className='btn_shadow'>
											<a href="https://boburm029@gmail.com" className=''><img src={email} alt="" style={{ width: '20px' }} /></a>
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className='right box_shodow'>
							<form action="https://formSubmit.co/boburm029@gmail.com" method="post" encType="text/plan">
								<div className='f_flex'>
									<div className='input row'>
										<span>YOUR NAME</span>
										<input type='text' name='name' required/>
									</div>
									<div className='input row'>
										<span>PHONE NUMBER </span>
										<input type='number' name='phone' required/>
									</div>
								</div>
								<div className='input'>
									<span>EMAIL </span>
									<input type='email' name='email' required/>	
									
								</div>
								<div className='input'>
									<span>SUBJECT </span>
									<input type='text' name='subject'  required/>
								</div>
								<div className='input'>
									<span>YOUR MESSAGE </span>
									<textarea cols='30' rows='4' name='message' ></textarea>
								</div>
								<input type="submit" value={"Send"} className='btn_shadow'/>
								{/* <input type="reset" value={"Reset"} className='btn_shadow'/> */}
							</form>




							{/* <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form> */}



						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact
