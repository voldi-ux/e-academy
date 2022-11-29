import React from 'react';
import './blocks.css';
import { ReactComponent as ThumbUp } from '../../resources/icons/thumb_up.svg'; 
import { ReactComponent as Question } from '../../resources/icons/rate_review.svg'; 
import { ReactComponent as Insight } from '../../resources/icons/insight.svg'; 
import { ReactComponent as Home } from '../../resources/icons/logo.svg'; 




const Blocks = () => {
    
    return (
      <div className="blocks-container">
        <div className="block block-1">
          <Home className="icon" />
          <h1>7.5 Users</h1>
        </div>

        <div className="block block-2">
          <Question className="icon" />
          <h1>20 questions answered</h1>
        </div>
        <div className="block block-3">
          <ThumbUp className="icon" />
          <h1>7.5k upvotes</h1>
        </div>
        <div className="block block-4">
          <Insight className="icon" />
          <h1>10 questions created</h1>
        </div>
      </div>
    );

}


export default Blocks;