import React from 'react'
import './Analysis.css'
import { Badge } from '@tremor/react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Analysis = () => {
  return (
    <div className='analysis-wrapper'>
        
        <h1 className='an-header' > <Link to="/manage-students"> <i><FaArrowLeft /> </i></Link>  <span>  Running Analysis For Grade 12 Mathematics</span> </h1 >
        <div className="box1">
          <div className="box1-header">
            <h2>Students At Risk</h2>
          </div>
          <ul>
            <li>Anita Adams</li>
            <li>Joseph James</li>
            <li>Mpela Steph</li>
            <li>Moong Floyed</li>
            <li>Ashley Money</li>
          </ul>
        </div>

        <div className="box2">
        <div className="box2-header">
            <h2>Struggling Topics for Students</h2>
          </div>

        <ul>
            <li> 
             <div>Problem Solving </div>
             <div> <Badge color='red' text='<78%'/></div>
            </li>
            <li> 
             <div>Euclidean Geometry </div>
             <div> <Badge color='red' text='<78%'/></div>
            </li>
            <li> 
             <div>Trigonometric functions (2D) </div>
             <div> <Badge color='red' text='<78%'/></div>
            </li>
            <li> 
             <div>Financial Mathematics</div>
             <div> <Badge color='red' text='<78%'/></div>
            </li>
            
          </ul>
        </div>


        </div>
      
  )
}

export default Analysis
