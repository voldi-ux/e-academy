import React, {useState } from 'react';
import "./TextBlock.css";


const TextBlock = ({blockText}) => { 
    const [block, setBlock] = useState(blockText);

    return (
      <div>
        <p
          className={{
            fontSize: block.fontSize,
            weight: block.weight,
            color: block.color,
            textTransform: block.textTransform ? block.textTransform : "none"
          }}
        >
          {block.content}
        </p>
      </div>
    );
} 


export default TextBlock;