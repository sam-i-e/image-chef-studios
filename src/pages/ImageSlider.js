const ImageSlider = ({ slides }) => {
  return (
    <div className="ImageSlider">
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={slide.url} alt={slide.title} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;