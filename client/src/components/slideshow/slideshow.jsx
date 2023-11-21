import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./slideshow.css";

const Slideshow = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === images.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? images.length - 1 : slide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <MdOutlineKeyboardArrowLeft onClick={prevSlide} className="arrow arrow-left" />
      {images.map((imageUrl, idx) => {
        return (
          <img
            src={imageUrl}
            alt={`Image ${idx + 1}`}
            key={idx}
            className={idx === slide ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <MdOutlineKeyboardArrowRight
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <div className="indicators">
        {images.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                idx === slide ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

const App = () => {
  const images = [
    "https://cdn.diemnhangroup.com/seoulspa/2023/08/1902x703.jpg",
    "https://cdn.diemnhangroup.com/seoulspa/2023/08/jQd8JSEz-1902X703.jpg",
    "https://cdn.diemnhangroup.com/seoulspa/2023/10/1903x704.png",
    "https://cdn.diemnhangroup.com/seoulspa/2023/10/1902x703.jpg",
    "https://cdn.diemnhangroup.com/seoulspa/2023/10/banner-T10.jpg",
  ];

  return <Slideshow images={images} />;
};

export default App;