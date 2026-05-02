import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KunziteRealImage from "../Kunzite real product.jpeg"
const kunziteImages = [
  {
    src: KunziteRealImage,
    alt: "Kunzite Face Cleanser - Main"
  },
  {
    src: KunziteRealImage,
    alt: "Kunzite Face Cleanser - Main"
  },
  {
    src: KunziteRealImage,
    alt: "Kunzite Face Cleanser - Main"
  },
  {
    src: KunziteRealImage,
    alt: "Kunzite Face Cleanser - Main"
  },

];

const KunziteImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Slider {...settings}>
        {kunziteImages.map((img, idx) => (
          <div key={idx} className="flex items-center justify-center h-[600px] md:h-[1000px] bg-[#18181b] rounded-3xl overflow-hidden">
            <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KunziteImageCarousel;
