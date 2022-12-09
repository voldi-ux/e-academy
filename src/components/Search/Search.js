import './Search.css'
import { FaSearch } from 'react-icons/fa'

const Search = ({placeholder, bgColor, color}) => {
  return (
    <div>
     <label className="search">
        <input className='input' style={{backgroundColor:bgColor, color: color}} placeholder={placeholder} type="text" />
        <div className="s-icon">
            <FaSearch className='icon'/>
        </div>
     </label>
    </div>
  )
}

Search.defaultProps = 
{
    placeholder: "Search in Notifications...",
    bgColor: "var(--yellow)",
    color: "var(--black)"
}

export default Search
