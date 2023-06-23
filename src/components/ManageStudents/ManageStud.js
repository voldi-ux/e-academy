
import './ManageStud.css'
import Filter from "../../filter/filter"
import Button from "../Button/Button"
import { Link , Outlet} from "react-router-dom"

//styling compoenents
import {FaRocket} from 'react-icons/fa'
import { Badge } from "@tremor/react"

const ManageStud = () => {

  return (
    <div className="manage-container">
      <div className="ms">
        <div className="ms-filter">
          <Filter title={"Grade"} defaultSelect={"All"} />
          <Filter title={"Subject"} defaultSelect={"All"} />
        </div>
        <div className="ms-table">
          <div className="ms-header">
            <input className="search-student" type="text" placeholder="Search Student..." />
            <div>
              {" "}
              <Link to="analysis">
                {" "}
                <Button>
                  {" "}
                  <FaRocket fontSize="20px" /> Analysis{" "}
                </Button>
              </Link>{" "}
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">School</th>
                <th scope="col">Student no</th>
                <th scope="col">Questions</th>
                <th scope="col">Practice</th>
                <th scope="col">Success rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="name">Voldi</td>
                <td data-label="surname">Muyumba</td>
                <td data-label="school">Barnato</td>
                <td data-label="stdnumber">22200844</td>
                <td data-label="questions">33</td>
                <td data-label="practice">
                  <Badge text="24" color="red" />
                </td>
                <td data-label="rate">
                  <Badge text="+89" color="green" />
                </td>
              </tr>
              <tr>
                <td data-label="name">Voldi</td>
                <td data-label="surname">Muyumba</td>
                <td data-label="school">Barnato</td>
                <td data-label="stdnumber">22200844</td>
                <td data-label="questions">33</td>
                <td data-label="practice">
                  <Badge text="24" color="red" />
                </td>
                <td data-label="rate">
                  <Badge text="+89" color="green" />
                </td>
              </tr>
              <tr>
                <td data-label="name">Voldi</td>
                <td data-label="surname">Muyumba</td>
                <td data-label="school">Barnato</td>
                <td data-label="stdnumber">22200844</td>
                <td data-label="questions">33</td>
                <td data-label="practice">
                  <Badge text="24" color="red" />
                </td>
                <td data-label="rate">
                  <Badge text="+89" color="green" />
                </td>
              </tr>
              <tr>
                <td data-label="name">Voldi</td>
                <td data-label="surname">Muyumba</td>
                <td data-label="school">Barnato</td>
                <td data-label="stdnumber">22200844</td>
                <td data-label="questions">33</td>
                <td data-label="practice">
                  <Badge text="24" color="red" />
                </td>
                <td data-label="rate">
                  <Badge text="+89" color="green" />
                </td>
              </tr>
              <tr>
                <td data-label="name">Voldi</td>
                <td data-label="surname">Muyumba</td>
                <td data-label="school">Barnato</td>
                <td data-label="stdnumber">22200844</td>
                <td data-label="questions">33</td>
                <td data-label="practice">
                  <Badge text="24" color="red" />
                </td>
                <td data-label="rate">
                  <Badge text="+89" color="green" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ms-btns">
          <button className="prev">Prev</button>
          <button className="next">Next</button>
        </div>

        {/* the analysis component will be automatically be rendered by this outlet */}
        <Outlet />
      </div>
    </div>
  );
}

export default ManageStud
