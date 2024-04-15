import { useState } from'react';
const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrent] = useState(0);
    const sliderStyles = {
        width: "100%",
        height: "100%",
        // overflow: "hidden",
        position: "relative",
        display: "flex",
        // justifyContent: "center",
    };
    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        borderRadius: "10px",
    };

    return (
        <div style={sliderStyles}>
            <div style={slideStyles}>

            </div>
            {/* {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={slide.url} alt={slide.title} />
        </div>
      ))} */}
        </div>
    );
};


export default ImageSlider;