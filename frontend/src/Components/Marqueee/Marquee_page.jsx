import React from 'react'
import Marquee from "react-fast-marquee";
import './marquee.css'
const Marquee_page = () => {
  return (
    <div>
        <div className="mar-container">
            <div className="mar-heading">
                <h1>Our Talent Partners & Industry Recruiters</h1>
            </div>

            <div className="mar-moving">
                <Marquee pauseOnHover speed={40}>
                    <div className='mar-img'>
                        <img src="src\assets\marquue\google.svg" alt="" />
                    </div>

                    <div className='mar-img'>
                        <img src="src\assets\marquue\infosys.svg" alt="" />
                    </div>

                    <div className='mar-img'>
                        <img src="src\assets\marquue\microsoft.svg" alt="" />
                    </div>

                    <div className='mar-img'>
                        <img src="src\assets\marquue\unilever.svg" alt="" />
                    </div>

                    <div className='mar-img'>
                        <img src="src\assets\marquue\amul.svg" alt="" />
                    </div>
                    <div className='mar-img'>
                        <img src="src\assets\marquue\britannia.svg" alt="" />
                    </div>
                    <div className='mar-img'>
                        <img src="src\assets\marquue\deloitte.svg" alt="" />
                    </div>
                    <div className='mar-img'>
                        <img src="src\assets\marquue\ITC.svg" alt="" />
                    </div>
                    <div className='mar-img'>
                        <img src="src\assets\marquue\kpmg.svg" alt="" />
                    </div>

                    <div className='mar-img'>
                        <img src="src\assets\marquue\nabard.svg" alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    </div>
  )
}

export default Marquee_page