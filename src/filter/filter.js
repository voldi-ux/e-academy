import React, { useEffect }from 'react';
import './filter.css';


/* 


selections = {
    title: ...,
    Onclick: () => 
}

*/



const Filter = ({ title, defaultSelect, selection }) => { 

       return (
         <div className="drop-down-container">
           <div className="drop-down-header">
             <div id="drop-down-heading">{ title}</div>
             <div id="drop-down-selected">{defaultSelect }</div>
           </div>
           <div className="drop-down-content">
             <h3>Hello 1</h3>
             <h3>Hello 2</h3>
             <h3>Hello 3</h3>
             <h3>Hello 4</h3>
           </div>
         </div>
       );
}




export default Filter;