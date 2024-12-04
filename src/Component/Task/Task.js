import React from 'react'
import "./Task.css"
import tasklist1 from "../../Assets/tasklist1.jpeg"
const Task = ({img,title,description,earning}) => {
    return (
        <>
            <div className="col-lg-6 col-md-6">
                <div className="box-shadow">
                    <div className='row'>

                        <div className="col-lg-4">
                            <img src={img} alt="" className='  img1' />
                        </div>
                        <div className="col-lg-8">
                            <h4>{title}</h4>
                            <p className='color1 text-body-secondary'>{description}</p>
                            <p>Earning potential: {earning}/-</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Task
