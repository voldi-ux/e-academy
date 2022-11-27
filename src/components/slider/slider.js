import React from "react";
import './slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Slider = () => { 
 const indicatorsStyle = {
    background: 'transparent',
    border: "2px solid #fff",
    borderRadius: 20,
    width: 20,
    height: 20,
    display: 'inline-block',
    margin: '0 8px',
  };

  const renderIndicators = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return <li style={{ ...indicatorsStyle, background: "#F65858" }} />;
    }
    return <li style={indicatorsStyle} onClick={onClickHandler} onKeyDown={onClickHandler} value={index} key={index} role="button" tabIndex={0}/>;
  };

  return (
    <div className="slider-container">
      <Carousel infiniteLoop autoPlay className="slider" showArrows={false} showThumbs={false} renderIndicator={renderIndicators} animationHandler="fade" swipeable={false}>
        <div className="slider-item">
          <img alt="" src={require("../../resources/images/slider-2.jpg")} />
          <p className="legend-1">Legend-1 2</p>
          <div className="overlay">
            <p>
              Digitizing Education. <br />
              4th industrial revolution in swing
            </p>
          </div>
        </div>
        <div className="slider-item">
          <img alt="" src={require("../../resources/images/slider-1.jpg")} />
          <p className="legend-1">Legend-1 1</p>
          <div className="overlay">
            <p>
              Digitizing Education. <br />
              4th industrial revolution in swing
            </p>
          </div>
        </div>

        <div className="slider-item">
          <img alt="" src={require("../../resources/images/slider-3.jpg")} />
          <p className="legend-1">Legend 3</p>
          <div className="overlay">
            <p>
              Digitizing Education. <br />
              4th industrial revolution in swing
            </p>
          </div>
        </div>
        <div className="slider-item">
          <img alt="" src={require("../../resources/images/slider-5.jpg")} />
          <p className="legend-1">Legend 3</p>
          <div className="overlay">
            <p>
              Digitizing Education. <br />
              4th industrial revolution in swing
            </p>
          </div>
        </div>
        <div className="slider-item">
          <img alt="" src={require("../../resources/images/slider-4.jpg")} />
          <p className="legend-1">Legend 3</p>
          <div className="overlay">
            <p>
              Digitizing Education. <br />
              4th industrial revolution in swing
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}



export default Slider;