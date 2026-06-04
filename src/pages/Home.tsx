import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronDown, Sparkles, ShieldCheck, Leaf, Droplets } from 'lucide-react';
import KunziteImageCarousel from '../components/KunziteImageCarousel';
import KunziteImage from '../imagemain16.jpeg'
import KunziteImage2 from '../imagemain13.jpeg'
import Image1 from "../Testimonial Image 1.jpeg"
import Image2 from "../Testimonial Image 2.jpeg"
import Image3 from "../Testimonial Image 3.jpeg"
import HeroImage from "../h1.jpeg"
import HeroImage2 from "../h2.jpeg"
import HeroImage3 from "../h3.jpeg"
import HeroImage4 from "../h4.jpeg"
import HeroImage5 from "../heroimg5.jpeg"
import HeroImage6 from "../heroimg6.jpeg"


// Images for hero carousel
const heroImages = [
  // KunziteImage,
  // KunziteImage2,
  // HeroImage,
  HeroImage2,
  HeroImage3,
  HeroImage4,
  // HeroImage5,
  HeroImage6,
  // 'https://images.pexels.com/photos/6621143/pexels-photo-6621143.jpeg?auto=compress&cs=tinysrgb&w=1600',
];
const categories = [
  {
    title: 'Face Serums', 
    desc: 'Targeted formulas for glow, texture refinement, and hydration.',
    img: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Cleansers',
    desc: 'Gentle daily cleansing that protects your skin barrier.',
    img: 'https://images.pexels.com/photos/6621467/pexels-photo-6621467.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Moisturizers',
    desc: 'Lightweight to rich textures for every skin type.',
    img: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Body Care',
    desc: 'Nourishing body essentials with a radiant finish.',
    img: 'https://images.pexels.com/photos/7659922/pexels-photo-7659922.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const testimonials = [
  {
    name: 'Neeta Pandey',
    role: 'Skin Wellness Coach',
    avatar: Image1,
    text: 'I was very confused about which facewash suited my skin. I used a couple of brands, but there was no improvement in my face. But then I found Kunzite Face Cleanser facewash. After using it for some days, I found so much improvement. I like the product and its quality.',
    rating: 5,
  },
  {
    name: 'Madhuri Sharma',
    role: 'Beauty Creator',
    avatar: Image2,
    text: 'One day I was searching the best Face cleanser which is good For Dry skin , Then My colleague suggest me Kunzite Face cleanser, I ordered and get the product as promised date. it has been 2 months I am using it and I am totally satisfied and I definitely recommend this product.',
    rating: 5,
  },
  {
    name: 'Mehak Sethi',
    role: 'Verified Customer',
    avatar: Image3,
    text: 'I’m in my 50s, and at this age, using any product doesn’t benefit much due to ageing. But using Kunzite Face Cleanser totally changed my life. Within a week, I saw results in improving my dull skin and brightening my skin. I love this product. You must buy this.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'Are Kunzite products suitable for sensitive skin?',
    a: 'Yes. Our formulas are dermatologically tested, fragrance-conscious, and developed to support skin barrier health.',
  },
  {
    q: 'How quickly can I see results?',
    a: 'Most users report visible hydration and glow within 7-14 days, with texture improvements in 4-6 weeks of consistent use.',
  },
  {
    q: 'Are your products cruelty-free?',
    a: 'Absolutely. Kunzite is 100% cruelty-free and we do not test on animals at any stage of development.',
  },
  {
    q: 'Can I use Kunzite products together in one routine?',
    a: 'Yes. Our range is designed to layer seamlessly. Start with cleanser, then serum, then moisturizer, and SPF in daytime.',
  },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
<section className="relative min-h-screen flex flex-col overflow-hidden">

  {/* Background Carousel */}
  <div className="absolute inset-0">

    {heroImages.map((img, i) => (
      <img
        key={i}
        src={img}
        alt="Kunzite beauty products"
        className={`
          absolute inset-0
          w-full
          h-full
          object-cover
          object-center
          transition-all
          duration-1000
          ease-in-out
          ${
            heroIndex === i
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }
        `}
        style={{
          imageRendering: "auto",
        }}
      />
    ))}

    {/* Subtle White Glass Overlay */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-white/45
        via-white/25
        to-transparent
        backdrop-blur-[1px]
        z-20
      "
    />

    {/* Luxury contrast layer */}
    <div
      className="
        absolute
        inset-0
        bg-black/5
        z-20
      "
    />

    {/* Carousel Dots */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">

      {heroImages.map((_, i) => (
        <button
          key={i}
          onClick={() => setHeroIndex(i)}
          className={`
            transition-all duration-300
            ${
              heroIndex === i
                ? "w-8 h-3 rounded-full bg-[#f59e0b]"
                : "w-3 h-3 rounded-full bg-white/50"
            }
          `}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}

    </div>

  </div>

  {/* Hero Content */}
  <div className="relative z-30 flex items-center justify-center min-h-screen">

    <div className="max-w-7xl w-full px-6 sm:px-8 lg:px-12">

      <div className="max-w-2xl">

        <p className="
          text-black
          text-sm
          font-semibold
          tracking-[4px]
          uppercase
          mb-4
        ">
          Kunzite Beauty
        </p>

        <h1
          className="
            text-5xl
            sm:text-7xl
            lg:text-8xl
            font-black
            text-black
            leading-[0.9]
            tracking-tight
            mb-8
          "
        >
          Raw.
          <br />

          <span className="text-yellow-500">
            Real.
          </span>

          <br />

          Radiant.
        </h1>

        <p
          className="
            text-black/70
            text-lg
            sm:text-xl
            mb-10
            max-w-lg
            leading-relaxed
          "
        >
          Discover skincare crafted with science and care —
          designed for healthy, radiant skin every day.
        </p>

        <div className="flex flex-wrap gap-4">

          <Link
            to="/products"
            className="
              bg-[#f59e0b]
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-[#fb923c]
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
            "
          >
            Shop Kunzite
          </Link>

          <Link
            to="/about"
            className="
              bg-white/60
              backdrop-blur-md
              border
              border-black/10
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-white/80
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            "
          >
            Our Story
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Feature Grid below Hero Section */}
      <div className="relative bg-slate-400/5 border-t border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black">
            {[
              { icon: Sparkles, label: 'Glow-Boost Formulas' },
              { icon: ShieldCheck, label: 'Dermat Tested' },
              { icon: Leaf, label: 'Cruelty Free' },
              { icon: Droplets, label: 'Hydration First' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-6 px-4 gap-2">
                <item.icon className="w-6 h-6 text-[#f59e0b]" strokeWidth={1.5} />
                <span className="text-lg text-black">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Categories</p>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight max-w-md">
              Premium skincare crafted for everyday radiance.
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="text-black text-sm leading-relaxed mb-4">
              Discover high-performance beauty essentials designed to hydrate, protect, and restore your natural glow.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[#f59e0b] text-sm font-semibold hover:gap-3 transition-all duration-300"
            >
              Explore products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Link to="/products" key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4] block card-hover">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-black font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-black text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      <section className="py-24 bg-[#ffffff]">
              {/* Kunzite Face Cleanser Featured Product Section - Images Carousel + Grid Details */}
              <section className="py-24 bg-[#ffffff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-black text-black mb-4 text-center">Kunzite Face Cleanser</h2>
                  <p className="text-[#f59e0b] text-2xl font-semibold uppercase tracking-widest mb-8 text-center">Featured Product</p>
                  <KunziteImageCarousel />
                  <div className="w-full grid md:grid-cols-2 gap-8 mt-10">
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-5">
                        <span className="block font-bold text-black text-2xl mb-1">Weight</span>
                        <span className="text-xl text-black">100 gm</span>
                      </div>
                      <div className="bg-white rounded-xl p-5">
                        <span className="block font-bold text-black text-lg mb-1">Skin type</span>
                        <span className="text-xl text-black">All skin types</span>
                      </div>
                      <div className="bg-white rounded-xl p-5">
                        <span className="block font-bold text-black text-2xl mb-1">pH</span>
                        <span className="text-xl text-black">Skin-friendly</span>
                      </div>
                      <div className="bg-white rounded-xl p-5">
                        <span className="block font-bold text-black text-2xl mb-1">Free from</span>
                        <span className="text-xl text-black">Parabens, sulfates, oils, alcohol</span>
                      </div>
                      <div className="bg-white rounded-xl p-5">
                        <span className="block font-bold text-black text-2xl mb-1">Manufacturer</span>
                        <span className="text-xl text-black">Om Sai Pharma Pack (WHO-GMP certified)</span>
                      </div>
                      <div className="bg-white rounded-xl p-5">
                        <span className="block font-bold text-black text-2xl mb-1">Origin</span>
                        <span className="text-lg text-black">Haridwar, India</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-5">
                        <span className="block font-bold text-black text-xl mb-1">Key Ingredients Explained</span>
                        <span className="text-lg text-[#f59e0b] font-semibold block mt-2">Cleansing Base (Gentle surfactants):</span>
                        <span className="text-black block">Decyl Glucoside, Sodium Lauroyl Sarcosinate, Cocamidopropyl Betaine</span>
                        <span className="text-black block text-base">Mild, plant-derived cleansers – good for daily use</span>
                        <span className="text-lg text-[#f59e0b] font-semibold block mt-4">Active Skincare Ingredients:</span>
                        <span className="text-black block">Niacinamide (Vitamin B3): Brightens skin, reduces acne marks, controls oil<br/>Salicylic Acid (BHA): Deep cleans pores, helps with acne & blackheads<br/>Ethyl Ascorbic Acid (Vitamin C): Improves glow, fights dullness<br/>Vitamin E: Antioxidant, protects and nourishes skin<br/>Hyaluronic Acid: Hydrates and keeps skin soft</span>
                        <span className="text-black block text-base">Multi-benefit: acne + glow + hydration</span>
                        <span className="text-lg text-[#f59e0b] font-semibold block mt-4">Texture & Stability:</span>
                        <span className="text-black block">Xanthan Gum (thickener), Tween 20 & Macrogolglycerol Hydroxystearate (mixes ingredients), Sodium Hydroxide (adjusts pH)</span>
                        <span className="text-lg text-[#f59e0b] font-semibold block mt-4">Aesthetic Add-ons:</span>
                        <span className="text-black block">Milii Capsules (colored beads) – dissolve while washing (visual appeal), CI 42090 (blue colorant), Perfume (fragrance)</span>
                        <span className="text-lg text-[#f59e0b] font-semibold block mt-4">Preservative:</span>
                        <span className="text-black block">Phenoxyethanol – keeps product safe from bacteria</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-[#f59e0b]/10 rounded-xl p-4 text-center">
                          <span className="block text-xl font-bold text-[#f59e0b] mb-1">Gentle daily cleansing</span>
                          <span className="text-black text-lg">No dryness</span>
                        </div>
                        <div className="bg-[#f59e0b]/10 rounded-xl p-4 text-center">
                          <span className="block text-xl font-bold text-[#f59e0b] mb-1">Acne & pores</span>
                          <span className="text-black text-lg">Salicylic acid</span>
                        </div>
                        <div className="bg-[#f59e0b]/10 rounded-xl p-4 text-center">
                          <span className="block text-xl font-bold text-[#f59e0b] mb-1">Brightens skin</span>
                          <span className="text-black text-lg">Niacinamide + Vit C</span>
                        </div>
                        <div className="bg-[#f59e0b]/10 rounded-xl p-4 text-center">
                          <span className="block text-xl font-bold text-[#f59e0b] mb-1">Hydrates</span>
                          <span className="text-black text-lg">Hyaluronic acid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <a 
                                      href="https://wa.me/917895463211
?text=I%20want%20to%20order%20Kunzite%20Face%20Cleanser%20(100gm)%20for%20all%20skin%20types.%20pH:%20Skin-friendly.%20Free%20from:%20Parabens,%20sulfates,%20oils,%20alcohol.%20Manufacturer:%20Om%20Sai%20Pharma%20Pack%20(WHO-GMP%20certified).%20Origin:%20Haridwar,%20India.%20Key%20Ingredients:%20Gentle%20surfactants%20(Decyl%20Glucoside,%20Sodium%20Lauroyl%20Sarcosinate,%20Cocamidopropyl%20Betaine),%20Niacinamide,%20Salicylic%20Acid,%20Ethyl%20Ascorbic%20Acid,%20Vitamin%20E,%20Hyaluronic%20Acid.%20Preservative:%20Phenoxyethanol.%20Benefits:%20Gentle%20cleansing,%20acne%20care,%20glow,%20hydration.%20Please%20share%20purchase%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" inline-block bg-[#d39c25] text-black px-10 py-4  rounded-full font-bold text-2xl shadow-lg hover:bg-[#e8bb08] transition-colors duration-300 mt-36 -mb-10"
                  >
                    Order now 
                  </a> */}
                  <a
  href={`https://wa.me/917895463211?text=I%20want%20to%20order%20*Kunzite%20Face%20Cleanser%20(100gm)*.%0A%0A%E2%80%A2%20Suitable%20for%20all%20skin%20types%0A%E2%80%A2%20pH%3A%20Skin-friendly%0A%E2%80%A2%20Free%20from%3A%20Parabens%2C%20Sulfates%2C%20Oils%2C%20and%20Alcohol%0A%E2%80%A2%20Manufacturer%3A%20Om%20Sai%20Pharma%20Pack%20(WHO-GMP%20Certified)%0A%E2%80%A2%20Origin%3A%20Haridwar%2C%20India%0A%0A*Key%20Ingredients%3A*%0A%E2%80%A2%20Decyl%20Glucoside%0A%E2%80%A2%20Sodium%20Lauroyl%20Sarcosinate%0A%E2%80%A2%20Cocamidopropyl%20Betaine%0A%E2%80%A2%20Niacinamide%0A%E2%80%A2%20Salicylic%20Acid%0A%E2%80%A2%20Ethyl%20Ascorbic%20Acid%20(Vitamin%20C)%0A%E2%80%A2%20Vitamin%20E%0A%E2%80%A2%20Hyaluronic%20Acid%0A%0A*Preservative%3A*%0A%E2%80%A2%20Phenoxyethanol%0A%0A*Benefits%3A*%0A%E2%80%A2%20Gentle%20cleansing%0A%E2%80%A2%20Acne%20care%0A%E2%80%A2%20Natural%20glow%20enhancement%0A%E2%80%A2%20Skin%20hydration%0A%0APlease%20share%20the%20purchase%20details%20and%20the%20current%20price%20of%20this%20product.`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#d39c25] text-black px-10 py-4 rounded-full font-bold text-2xl shadow-lg hover:bg-[#e8bb08] transition-colors duration-300 mt-36 -mb-10"
>
  Order Now
</a>
                </div>
              </section>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Featured</p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Kunzite Radiance Ritual</h2>
          <p className="text-black mb-12 max-w-md">A complete routine to cleanse, repair, and glow from day to night.</p>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-3xl aspect-video lg:aspect-auto lg:h-[480px]">
              <img
                src="https://images.pexels.com/photos/6621468/pexels-photo-6621468.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Kunzite skincare set"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#f59e0b] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                Bestseller set
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-black mb-2">Daily Glow Essentials</h3>
              <p className="text-black leading-relaxed text-sm">
                Includes Gentle Cleansing Gel, Vitamin C Radiance Serum, Barrier Repair Moisturizer, and Overnight Renewal Cream. Powered by niacinamide, hyaluronic acid, vitamin C, and ceramides.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Hydrates instantly', 'Improves texture', 'Boosts brightness', 'Supports skin barrier'].map((item) => (
                  <div key={item} className="bg-white/5 rounded-xl p-3 text-center text-xs text-black">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-3xl font-black text-black">INR 2,499</p>
                  <p className="text-black text-sm">Complete ritual kit</p>
                </div>
                <Link to="/products" className="bg-[#f59e0b] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#fb923c] transition-colors duration-300 text-sm">
                  Buy now
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-black">Loved by real skin, every day</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-600/5 border border-white/5 rounded-2xl p-7 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-black text-lg leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-black font-semibold text-sm">{t.name}</p>
                  {/* <p className="text-black text-xs">{t.role}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">FAQs</p>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Everything about Kunzite beauty</h2>
              <p className="text-black text-sm leading-relaxed">
                Need help choosing the right products? Here are quick answers to our most common skincare and order questions.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                    activeFaq === i ? 'border-[#f59e0b]/50 bg-white' : 'border-black/10 bg-white'
                  }`}
                >
                  <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                    <span className="font-semibold text-black text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#f59e0b] shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-5 pb-5 text-black text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
