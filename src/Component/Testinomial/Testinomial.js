import React from 'react'
import './Testinomial.css'
import user1 from '../../Assets/user1.jpg'
import user2 from '../../Assets/user2.jpg'
const Testinomial = () => {
    return (
        <>
            <div className="col-md-5 testinomial">
                <p>TaskPulse streamlined our task management and client communication—simple, efficient, and highly effective!</p>
                <div>
                    <img src={user1} alt="" />
                    <p className='name'>

                    <b>Agelina</b>
                    </p>
                </div>
            </div>
            <div className="col-md-5 testinomial">
                <p>TaskPulse streamlined our task management and client communication—simple, efficient, and highly effective!</p>
                <div>
                    <img src={user2} alt="" />
                    <p className='name'>

                    <b>Agelina</b>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Testinomial
