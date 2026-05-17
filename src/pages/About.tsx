import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, TrendingUp, Heart, Shield } from 'lucide-react';
import AboutImage from '../about kunzite.jpg'
import Image1 from '../imgmain6.jpeg'
import AboutOurStoryImage from "../about our story image.jpeg"
import CEOImage from '../CEO Kunzite.jpeg'
const team = [
  {
    name: 'Aarushi Mehta',
    role: 'CEO & Founder',
    img: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    name: 'Dr. Nikhil Rao',
    role: 'Dermatology Advisor',
    img: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    name: 'Simran Kaur',
    role: 'Head of Brand Experience',
    img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    name: 'Rohit Verma',
    role: 'Operations & Quality',
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
];

const ceoMessage = {
  name: 'Manish Kumar Dubey',
  role: 'CEO & Founder, Kunzite',
  img: CEOImage,
  message:
    'Kunzite was created for people who want effective skincare without confusion. Our promise is simple: honest formulas, visible results, and products that make you feel confident in your natural skin every single day.',
};

const values = [
  {
    icon: Heart,
    title: 'Skin First',
    desc: 'Every formula begins with what supports healthy, resilient skin over the long term.',
  },
  {
    icon: Shield,
    title: 'Ingredient Transparency',
    desc: 'We clearly communicate what goes into our formulas and why each ingredient matters.',
  },
  {
    icon: Award,
    title: 'Performance',
    desc: 'We blend proven actives with elegant textures so every product feels and works premium.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    desc: 'We continuously refine our formulations with modern skincare science and customer feedback.',
  },
];

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            // src="https://images.pexels.com/photos/6621448/pexels-photo-6621448.jpeg?auto=compress&cs=tinysrgb&w=1600"
            src={AboutImage}
            alt="About hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-4">About Kunzite</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Crafted for Real Skin, Not Filters
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Kunzite was built to create beauty products that are effective, gentle, and confidently wearable in daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#f59e0b] text-xl font-semibold uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Built on science, powered by care
            </h2>
            <p className="text-black  leading-relaxed mb-5">
              Kunzite started with one simple idea: skincare should be both luxurious and honest. We spent years refining formulas that deliver visible results without overwhelming skin.
            </p>
            <p className="text-black  leading-relaxed mb-8">
              From ingredient sourcing to packaging experience, every detail is designed for comfort, consistency, and glow you can trust.
            </p>
            <div className="space-y-3">
              {[
                '50+ product iterations tested before launch',
                'Dermatology-backed ingredient philosophy',
                'Cruelty-free and consciously formulated',
                'Thousands of happy skincare routines built',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f59e0b] shrink-0" />
                  <span className="text-black text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src={Image1}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#d2eaf0] text-black rounded-2xl p-6 shadow-2xl">
              <p className="text-4xl font-black">5+</p>
              <p className="text-sm font-semibold">Years of Formulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <img
                src={ceoMessage.img}
                alt={ceoMessage.name}
                className="w-full max-w-md rounded-3xl object-cover border border-white/10"
              />
              <div className="absolute -bottom-5 left-5 bg-[#f59e0b] text-black px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                Message from CEO
              </div>
            </div>
            <div>
              <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Founder's Note</p>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-5">A Message from  CEO</h2>
              <p className="text-black text-lg leading-relaxed mb-6">
                "{ceoMessage.message}"
              </p>
              <p className="text-black font-semibold">{ceoMessage.name}</p>
              <p className="text-black  text-sm">{ceoMessage.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">What drives us forward</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-black/10 border border-white/5 rounded-2xl p-7 card-hover text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#f59e0b]/10 mb-5">
                  <v.icon className="w-7 h-7 text-[#f59e0b]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-white  text-lg leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Meet the beauty experts</h2>
          <p className="text-black  mt-4 max-w-xl mx-auto text-sm">
            Our team of dedicated professionals brings passion, expertise, and personalized attention to every client relationship.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="group card-hover">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-white font-bold">{member.name}</h4>
              <p className="text-[#f59e0b] text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-20 bg-[#f59e0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2+', label: 'Products Delivered' },
              { value: '1K+', label: 'Happy Customers' },
              { value: '8+', label: 'Cities Served' },
              { value: '5+', label: 'Years in Beauty' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-5xl font-black text-black mb-2">{stat.value}</p>
                <p className="text-black/70 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
          Ready to build your glow routine?
        </h2>
        <p className="text-black  mb-8 text-lg">
          Start with Kunzite essentials tailored for your skin goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#f59e0b] text-black px-8 py-4 rounded-full font-bold hover:bg-white  transition-colors duration-300"
          >
            Contact Kunzite <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2  border-2 text-black px-8 py-4 rounded-full font-bold  hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors duration-300"
          >
            View Products
          </Link>
        </div>
      </section>
    </div>
  );
}
