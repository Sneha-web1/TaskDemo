import React from 'react'
import './MiddleSection.css'
import network from '../../Assets/network.png'
const MiddleSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div>
                    <p className='about'>Why we are diffrent</p>
                    <ul className='margin-left'>
                        <li>Our company stands apart by integrating innovation with sustainability, ensuring every product is crafted with the future in mind.</li>
                        <li>We value transparency, openly sharing our processes, progress, and setbacks with our community.</li>
                        <li>Unlike others, we prioritize human connection in every interaction, creating authentic relationships with both clients and employees.</li>
                        <li>We set ourselves apart by blending cutting-edge technology with a human-centered approach, delivering results that matter</li>
                        <li>We are driven by purpose, committed to making a meaningful impact beyond just profits.</li>
                        <li>What makes us unique is our commitment to continuous learning, allowing us to constantly improve and innovate in our field.</li>
                        <li>Our company differs by focusing on collaboration over competition, fostering a culture where everyone thrives together.</li>
                        <li>We redefine excellence by consistently exceeding expectations, delivering high-quality services that inspire trust.</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-6"> 
                <div>
                    <img src={network} alt="" className='side-image img-fluid' />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MiddleSection
