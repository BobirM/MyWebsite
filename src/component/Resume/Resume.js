import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"
import pdpLogo from '../pic/PDPlogo.png'
import evaset from '../pic/LOGO.svg'
import resume from '../pic/Resume..pdf'

const Resume = () => {
	return (
		<>
			<section className='Resume' id='resume'>
				<div className='container top'>
					<div className='heading text-center'>
						{/* <h4>7+ YEARS OF EXPERIENCE</h4> */}
						<h1>My Resume</h1>
					</div>

					<div className='content-section mtop d_flex'>
						<div className='left'>
							<div className='heading'>
								<h4>2021 April 2021 October</h4>
								<h1>Education</h1>
								<div style={{ position: 'absolute' }}>
									<img src={pdpLogo} alt="" style={{ width: '200px', height: '200px', position: 'relative', left: '27px', top: '-140px' }} />
								</div>
							</div>

							<div className='content'>
								{ResumeApi.map((val, id) => {
									if (val.category === "education") {
										return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
									}
								})}

								
							</div>
						</div>
						<div className='left'>
							<div className='heading'>
								<h4>2021 December  to present</h4>
								<h1>Employment</h1>
								<div style={{ position: 'absolute' }}>
									<img src={evaset} alt="" style={{ width: '200px', height: '200px', position: 'relative', left: '53px', top: '-140px' }} />
								</div>
							</div>

							<div className='content'>
								{ResumeApi.map((val, index) => {
									if (val.category === "experience") {
										return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
									}
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="resumeBtn">
					<a href={resume} download>
						<p className="btnText">
							<button className="btn_shadow">Resume Download</button>
						</p>
					</a>
				</div>
			</section>
		</>
	)
}

export default Resume
