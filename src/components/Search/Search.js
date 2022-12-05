import './Search.css'
import { ReactComponent as SearchIcon } from '../../resources/icons/search.svg'

const Search = ({placeholder, bgColor, color}) => {
  return (
    <div>
     <label className="search">
        <input className='input' style={{backgroundColor:bgColor, color: color}} placeholder={placeholder} type="text" />
        <div className="s-icon">
            <SearchIcon className='icon'/>
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
