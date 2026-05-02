import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, X } from 'lucide-react';
import HeroImage from "../Product hero section.jpg"
import firstProductImage from "../Kunzite real product image.png"
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
    img: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Featured',
  },
  {
    id: 3,
    title: 'Hydra Gentle Cleanser',
    location: 'Sulphate-free daily cleanse',
    price: 'INR 599',
    category: 'Cleansers',
    img: 'https://images.pexels.com/photos/6621467/pexels-photo-6621467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Daily Use',
  },
  {
    id: 4,
    title: 'Retinol Night Renewal Cream',
    location: 'Smoothness + overnight repair',
    price: 'INR 1,099',
    category: 'Night Care',
    img: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'New',
  },
  {
    id: 5,
    title: 'SPF 50 Daily Shield',
    location: 'UV protection without white cast',
    price: 'INR 749',
    category: 'Sun Care',
    img: 'https://images.pexels.com/photos/6621281/pexels-photo-6621281.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Top Rated',
  },
  {
    id: 6,
    title: 'Body Glow Butter',
    location: 'Rich nourishment for soft skin',
    price: 'INR 699',
    category: 'Body Care',
    img: 'https://images.pexels.com/photos/7659922/pexels-photo-7659922.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Limited',
  },
];

const categories = ['All', 'Serums', 'Cleansers', 'Moisturizers', 'Night Care', 'Sun Care', 'Body Care'];

const tagColors: Record<string, string> = {
  Bestseller: 'bg-[#f59e0b]/10 text-[#f59e0b]',
  Featured: 'bg-orange-500/10 text-orange-400',
  'Daily Use': 'bg-blue-500/10 text-blue-400',
  New: 'bg-green-500/10 text-green-400',
  'Top Rated': 'bg-purple-500/10 text-purple-400',
  Limited: 'bg-rose-500/10 text-rose-400',
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFilter, setShowFilter] = useState(false);
  const whatsappNumber = '918126142095';

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  const sendProductToWhatsApp = (product: (typeof allProducts)[number]) => {
    const message = [
      'Hello Kunzite Team, I am interested in this product:',
      '',
      `Product: ${product.title}`,
      `Category: ${product.category}`,
      `Price: ${product.price}`,
      `Benefit: ${product.location}`,
      `Tag: ${product.tag}`,
      '',
      'Please share complete details and how to order.',
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Products hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-4 mt-14">Our Beauty Collection</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Find Your Perfect Routine
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Browse Kunzite's skincare and body care lineup crafted for healthy, radiant skin.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-[#0d0d0d] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#f59e0b] text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 px-4 py-2 rounded-full text-sm transition-colors shrink-0"
            >
              {showFilter ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
              <span className="hidden sm:block">Filter</span>
            </button> */}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 text-sm mb-8">
          Showing <span className="text-white font-semibold">{filtered.length}</span> products
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, idx) => (
            <div
              key={product.id}
              className={`group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden card-hover ${idx === 0 ? 'cursor-pointer' : 'cursor-default'} ${idx !== 0 ? 'opacity-60 backdrop-blur-md' : ''}`}
              onClick={idx === 0 ? () => sendProductToWhatsApp(product) : undefined}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={product.img}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${idx !== 0 ? 'opacity-70' : ''}`}
                />
                {idx !== 0 && (
                  <div className="absolute inset-0 bg-[#18181b]/60 backdrop-blur-[3px] z-10" />
                )}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[product.tag] || 'bg-white/10 text-white'}`}>
                    {product.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-5 ${idx !== 0 ? 'opacity-80' : ''}">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#f59e0b] transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{product.location}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xl font-black text-white">{product.price}</p>
                    <p className="text-xs text-gray-500">Kunzite Beauty</p>
                  </div>
                  {idx === 0 ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        sendProductToWhatsApp(product);
                      }}
                      className="flex items-center gap-1.5 bg-[#f59e0b]/10 hover:bg-[#f59e0b] text-[#f59e0b] hover:text-black px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                    >
                      Place order <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex items-center gap-1.5 bg-gray-700 text-gray-400 px-4 py-2 rounded-full text-sm font-semibold cursor-not-allowed"
                    >
                      Will be live soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Need help choosing products?
          </h2>
          <p className="text-gray-400 mb-8">
            Share your skin type and goals with us, and we will help you build your perfect Kunzite routine.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#f59e0b] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300"
          >
            Talk to a Beauty Advisor <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
