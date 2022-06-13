import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top' id='hobbies'>
        <div className='container'>
          <div className='heading'>
            <h4>Hobbies</h4>
            <h1>My Interests</h1>
          </div>

          <div className='content grid'id="grid1">
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

           
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
