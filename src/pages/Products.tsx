


import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import HeroImage from '../Product hero section.jpg';
import firstProductImage from '../Kunzite real product image.png';
import Image1 from '../imagemain10.jpeg'
import Image2 from '../imagemain11.jpeg'
import Image3 from '../imagemain13.jpeg'
import Image4 from '../imagemain14.jpeg'
import Image5 from '../imagemain16.jpeg'
import Image6 from '../imagemain17.jpeg'
import Image7 from '../imagemain8.jpeg'
import Image8 from '../imagemain9.jpeg'
import Image9 from '../imagemain15.jpeg'
import Image10 from '../imgmain3.jpeg'
import Image11 from '../kunzitecleanser.jpeg'
const allProducts = [
{
  id: 1,
    title: 'Kunzite Face Cleanser',
    location: 'Brightening + glow support',
    price: 'INR 299',
    category: 'Cleansers',
    img: firstProductImage,
    tag: 'Bestseller',
  },
  {
    id: 2,
    title: 'Barrier Repair Moisturizer',
    location: 'Ceramides + deep hydration',
    price: 'INR 799',
    category: 'Moisturizers',
    img: Image2,
    tag: 'Featured',
  },
  {
    id: 3,
    title: 'Hydra Gentle Cleanser',
    location: 'Sulphate-free daily cleanse',
    price: 'INR 599',
    category: 'Cleansers',
    img: Image11,
    tag: 'Daily Use',
  },
  {
    id: 4,
    title: 'Retinol Night Renewal Cream',
    location: 'Smoothness + overnight repair',
    price: 'INR 1,099',
    category: 'Night Care',
    img: Image3,
    tag: 'New',
  },
  {
    id: 5,
    title: 'SPF 50 Daily Shield',
    location: 'UV protection without white cast',
    price: 'INR 749',
    category: 'Sun Care',
    img: Image4,
    tag: 'Top Rated',
  },
  {
    id: 6,
    title: 'Body Glow Butter',
    location: 'Rich nourishment for soft skin',
    price: 'INR 699',
    category: 'Body Care',
    img: Image10,
    tag: 'Limited',
  },
];

const categories = [
  'All',
  'Cleansers',
  'Moisturizers',
  'Night Care',
  'Sun Care',
  'Body Care',
];

const tagColors: Record<string, string> = {
  Bestseller: 'bg-[#f59e0b]/10 text-[#f59e0b]',
  Featured: 'bg-orange-500/10 text-orange-400',
  'Daily Use': 'bg-blue-500/10 text-blue-400',
  New: 'bg-green-500/10 text-green-400',
  'Top Rated': 'bg-purple-500/10 text-purple-400',
  Limited: 'bg-rose-500/10 text-rose-400',
};

export default function Products() {
  const [activeCategory, setActiveCategory] =
    useState('All');

  const [showFilter, setShowFilter] =
    useState(false);

  const whatsappNumber = '7895463211';

  const filtered =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter(
          (p) => p.category === activeCategory
        );

  const sendProductToWhatsApp = (
    product: (typeof allProducts)[number]
  ) => {
    const message = [
      'Hello Kunzite Team, I am interested in this product:',
      '',
      `Product: ${product.title}`,
      `Category: ${product.category}`,
      `Price: ${product.price}`,
      `Benefit: ${product.location}`,
      `Tag: ${product.tag}`,
      '',
      'Please share complete details and ordering process. Thank you!',
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Products hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-4 mt-14">
            Our Beauty Collection
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Find Your Perfect Routine
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">
            Browse Kunzite's skincare and body care lineup
            crafted for healthy, radiant skin.
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* MOBILE FILTER BUTTON */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilter(true)}
              className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          <div className="flex gap-8">

            {/* DESKTOP SIDEBAR */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 bg-slate-100 rounded-3xl p-6 border border-gray-200">

                <h2 className="text-2xl font-bold text-black mb-6">
                  Categories
                </h2>

                <div className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() =>
                        setActiveCategory(cat)
                      }
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        activeCategory === cat
                          ? 'bg-[#f59e0b] text-black'
                          : 'bg-white text-gray-700 hover:bg-black hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* MOBILE FILTER DRAWER */}
            <div
              className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
                showFilter
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowFilter(false)}
              />

              {/* DRAWER */}
              <div
                className={`absolute left-0 top-0 h-full w-72 bg-white p-6 transition-transform duration-300 ${
                  showFilter
                    ? 'translate-x-0'
                    : '-translate-x-full'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-black">
                    Filters
                  </h2>

                  <button
                    onClick={() =>
                      setShowFilter(false)
                    }
                  >
                    <X className="w-5 h-5 text-black" />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setShowFilter(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        activeCategory === cat
                          ? 'bg-[#f59e0b] text-black'
                          : 'bg-slate-100 text-gray-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            <div className="flex-1">

              <p className="text-black text-sm mb-8">
                Showing{' '}
                <span className="font-semibold text-[#f59e0b]">
                  {filtered.length}
                </span>{' '}
                products
              </p>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

              {filtered.map((product, index) => {
  const isLocked = index >= filtered.length - 3;

  return (
    <div
      key={product.id}
      className={`group relative border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300 ${
        isLocked
          ? 'bg-slate-100/80'
          : 'bg-slate-100 hover:shadow-2xl cursor-pointer'
      }`}
      onClick={() => {
        if (!isLocked) {
          sendProductToWhatsApp(product);
        }
      }}
    >
      {/* BLUR OVERLAY */}
      {isLocked && (
        <div className="absolute inset-0 z-20 backdrop-blur-[3px] bg-white/20 flex items-center justify-center">
          <div className="bg-black/80 text-white px-5 py-2 rounded-full text-sm font-semibold">
            Coming Soon
          </div>
        </div>
      )}

      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={product.img}
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            !isLocked && 'group-hover:scale-105'
          } ${isLocked ? 'opacity-70' : ''}`}
        />

        {/* TAG */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              tagColors[product.tag] ||
              'bg-white/10 text-white'
            }`}
          >
            {product.tag}
          </span>
        </div>

        {/* CATEGORY */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {product.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="text-black font-bold text-lg mb-1 group-hover:text-[#f59e0b] transition-colors duration-200">
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {product.location}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">

          <div>
            <p className="text-xl font-black text-black">
              {product.price}
            </p>

            <p className="text-xs text-gray-500">
              Kunzite Beauty
            </p>
          </div>

          {!isLocked ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                sendProductToWhatsApp(product);
              }}
              className="flex items-center gap-1.5 bg-[#f59e0b]/10 hover:bg-[#f59e0b] text-[#f59e0b] hover:text-black px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
            >
              Place order

              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-300 text-gray-500 px-4 py-2 rounded-full text-sm font-semibold cursor-not-allowed"
            >
              Not Available
            </button>
          )}

        </div>
      </div>
    </div>
  );
})}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-black">

        <div className="max-w-3xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-black text-white mb-4">
            Need help choosing products?
          </h2>

          <p className="text-gray-400 mb-8">
            Share your skin type and goals with us,
            and we will help you build your perfect
            Kunzite routine.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#f59e0b] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300"
          >
            Talk to a Beauty Advisor

            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </section>
    </div>
  );
}