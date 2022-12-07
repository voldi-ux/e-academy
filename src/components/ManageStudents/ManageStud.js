
import "./ManageStud.css"

import Filter from "../../filter/filter"
import Button from "../Button/Button"
import Student from "./Student/Student"
import { Link } from "react-router-dom"

//styling compoenents
import {FaRocket} from 'react-icons/fa'

const ManageStud = () => {

 
  return (
    <div className="ms">
      
       <div className="ms-filter">
        <Filter title={"Grade"} defaultSelect={"All"} />
        <Filter title={"Subject"} defaultSelect={"All"} />
       </div>
      <div className="ms-table">
       
       <div className="ms-header">
          
          <input className="search-student" type="text" placeholder="Search Student..." />
         <div > <Link to='analysis'> <Button>    <FaRocket fontSize="20px"/>  Run Analysis   </Button></Link>  </div>
       </div>

       <div className="ms-titles">
        <h2>Name</h2>
        <h2>Surname</h2>
        <h2>School</h2>
        <h2>Student No</h2>
        <h2>Questions</h2>
        <h2> Practice</h2>
        <h2>Success Rate</h2>
       </div>

       <hr style={{width: "96%", margin: "auto"}}></hr>

       <div className="ms-students">
         <Student/>
         <Student/>
         <Student/>
         <Student/>
         <Student/>
         <Student/>

       </div>

      </div>

      <div className="ms-btns">
        <button className="prev">Prev</button>
        <button className="next">Next</button>

      </div>


    </div>
  )
}

export default ManageStud
