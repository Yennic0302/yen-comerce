import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./CarouselHome.css";

const CarouselHome = () => {
  const images = [
    "carousel-img-1.png",
    "carousel-img-2.png",
    "carousel-img-3.png",
  ];
  const titlesImages = ["Phones", "Consoles", "SmartTv"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const { mcApp, bgs, tsc } = useSelector((state) => state.themeColor);
  const imgCarouselRef = useRef();

  const selectNewImage = (index, img, next = true) => {
    const condition = next ? selectedIndex < images.length - 1 : index > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? index - 1
      : images.length - 1;
    setSelectedImage(img[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    imgCarouselRef.current.style.animation = "slide-img-previous 1s";
    selectNewImage(selectedIndex, images, false);
    setTimeout(() => {
      imgCarouselRef.current.style.animation = "none";
    }, 1000);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
    imgCarouselRef.current.style.animation = "slide-img-next 1s";

    setTimeout(() => {
      imgCarouselRef.current.style.animation = "none";
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <article className={`home-component-carousel container ${bgs}`}>
      <button onClick={previous} className={`btn-previous ${mcApp}`}>
        {<BsArrowLeft />}
      </button>
      <div ref={imgCarouselRef} className="carousel-img-container">
        <h1 className={`home-title-main ${mcApp}`}>
          {titlesImages[selectedIndex]}
        </h1>
        <img
          className="carousel-img"
          src={require(`../../assets/${selectedImage}`)}
          alt="gentleman"
        />
        <h1 className={`home-title-second ${mcApp} ${tsc}`}>
          {titlesImages[selectedIndex]}
        </h1>
      </div>
      <button onClick={next} className={`btn-next ${mcApp}`}>
        {<BsArrowRight />}
      </button>
    </article>
  );
};

export default CarouselHome;
