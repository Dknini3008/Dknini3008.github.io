import React from 'react'
import './Hero.css'

const Hero = props => {
  return(
    <React.Fragment>
      <div className="Hero">
        <div className="Hero__color_filter" style={{height: props.h}}></div>
        <div className="Hero__img" style={{height: props.h}}>
        <img src={props.heroImage} alt="herobackground" style={{height: props.h, width: props.w}}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero