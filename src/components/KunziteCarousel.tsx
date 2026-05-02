import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const kunziteSlides = [
  {
    title: "Weight",
    content: "100 gm"
  },
  {
    title: "Skin type",
    content: "All skin types"
  },
  {
    title: "pH",
    content: "Skin-friendly"
  },
  {
    title: "Free from",
    content: "Parabens, sulfates, oils, alcohol"
  },
  {
    title: "Manufacturer",
    content: "Om Sai Pharma Pack (WHO-GMP certified)"
  },
  {
    title: "Origin",
    content: "Haridwar, India"
  },
  {
    title: "Cleansing Base (Gentle surfactants)",
    content: "Decyl Glucoside, Sodium Lauroyl Sarcosinate, Cocamidopropyl Betaine\nMild, plant-derived cleansers – good for daily use"
  },
  {
    title: "Active Skincare Ingredients",
    content: "Niacinamide (Vitamin B3): Brightens skin, reduces acne marks, controls oil\nSalicylic Acid (BHA): Deep cleans pores, helps with acne & blackheads\nEthyl Ascorbic Acid (Vitamin C): Improves glow, fights dullness\nVitamin E: Antioxidant, protects and nourishes skin\nHyaluronic Acid: Hydrates and keeps skin soft\nMulti-benefit: acne + glow + hydration"
  },
  {
    title: "Texture & Stability",
    content: "Xanthan Gum (thickener)\nTween 20 & Macrogolglycerol Hydroxystearate (mixes ingredients)\nSodium Hydroxide (adjusts pH)"
  },
  {
    title: "Aesthetic Add-ons",
    content: "Milii Capsules (colored beads) – dissolve while washing (visual appeal)\nCI 42090 (blue colorant)\nPerfume (fragrance)"
  },
  {
    title: "Preservative",
    content: "Phenoxyethanol – keeps product safe from bacteria"
  },
  {
    title: "Gentle daily cleansing",
    content: "No dryness"
  },
  {
    title: "Acne & pores",
    content: "Salicylic acid"
  },
  {
    title: "Brightens skin",
    content: "Niacinamide + Vit C"
  },
  {
    title: "Hydrates",
    content: "Hyaluronic acid"
  }
];

const KunziteCarousel = () => {
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
    <div className="w-full max-w-xl mx-auto py-8">
      <Slider {...settings}>
        {kunziteSlides.map((slide, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center h-64 bg-[#18181b] rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#f59e0b] mb-4 text-center">{slide.title}</h3>
            <p className="text-lg md:text-xl text-white whitespace-pre-line text-center">{slide.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KunziteCarousel;
