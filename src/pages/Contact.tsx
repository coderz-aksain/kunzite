// import { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
// import KunziteContact from '../kunzite contact.jpg';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const whatsappNumber = '917895463211';

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     const message = [
//       'New message from Kunzite website contact form:',
//       '',
//       `Name: ${form.name}`,
//       `Email: ${form.email}`,
//       `Phone: ${form.phone || 'Not provided'}`,
//       `Subject: ${form.subject}`,
//       '',
//       'Message:',
//       form.message,
//     ].join('\n');
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//     await new Promise((r) => setTimeout(r, 500));
//     setLoading(false);
//     setSubmitted(true);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="">
//       {/* Header */}
//       <section className="relative py-52  overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={KunziteContact}
//             alt="Contact"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-[#0a0a0a]/80" />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
//           <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
//             Let's Create Your Glow Plan
//           </h1>
//           <p className="text-gray-300 text-lg max-w-xl">
//             Our Kunzite skincare advisors are ready to guide your routine and answer product questions.
//           </p>
//         </div>
//       </section>

//       {/* Contact info + form */}
//       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-5 gap-12">
//           {/* Left info */}
//           <div className="lg:col-span-2 space-y-8">
//             <div>
//               <h2 className="text-3xl font-black text-white mb-4">Get in touch</h2>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Whether you need product recommendations, order support, or ingredient guidance, we are here to help.
//               </p>
//             </div>

//             <div className="space-y-5">
//               {[
//                 {
//                   icon: MapPin,
//                   label: 'Our Office',
//                   value: 'Brij vihar kankhal Haridwar Uttrakhand 249408',
//                 },
//                 {
//                   icon: Phone,
//                   label: 'Phone',
//                   value: '+91 78954 63211',
//                   href: 'tel:+917895463211',
//                 },
//                 {
//                   icon: Mail,
//                   label: 'Email',
//                   value: 'skinscare26@gmail.com',
//                   href: 'mailto:skinscare26@gmail.com',
//                 },
//                 {
//                   icon: Clock,
//                   label: 'Office Hours',
//                   value: 'Mon–Fri: 10am – 7pm IST\nSat: 10am – 5pm IST',
//                 },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
//                     <item.icon className="w-5 h-5 text-[#f59e0b]" />
//                   </div>
//                   <div>
//                     <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
//                     {item.href ? (
//                       <a href={item.href} className="text-white text-sm hover:text-[#f59e0b] transition-colors whitespace-pre-line">
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-white text-sm whitespace-pre-line">{item.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Map placeholder */}
//             <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#111111] border border-white/10">
//               <img
//                 src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Location"
//                 className="w-full h-full object-cover opacity-60"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-[#f59e0b] text-black p-3 rounded-full shadow-lg">
//                   <MapPin className="w-6 h-6" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right form */}
//           <div className="lg:col-span-3">
//             <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10">
//               {submitted ? (
//                 <div className="flex flex-col items-center justify-center py-16 text-center">
//                   <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-full flex items-center justify-center mb-6">
//                     <CheckCircle className="w-8 h-8 text-[#f59e0b]" />
//                   </div>
//                   <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
//                   <p className="text-gray-400 max-w-sm">
//                     Thank you for reaching out. Our team will get back to you within 24 hours.
//                   </p>
//                   <button
//                     onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
//                     className="mt-8 bg-[#f59e0b] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#fb923c] transition-colors text-sm"
//                   >
//                     Send another message
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <h3 className="text-2xl font-black text-white mb-6">Send us a message</h3>
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div className="grid sm:grid-cols-2 gap-5">
//                       <div>
//                         <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Full Name *</label>
//                         <input
//                           type="text"
//                           name="name"
//                           required
//                           value={form.name}
//                           onChange={handleChange}
//                           placeholder="John Smith"
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f59e0b] transition-colors"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email Address *</label>
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           value={form.email}
//                           onChange={handleChange}
//                           placeholder="john@example.com"
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f59e0b] transition-colors"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid sm:grid-cols-2 gap-5">
//                       <div>
//                         <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Phone Number</label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={form.phone}
//                           onChange={handleChange}
//                           placeholder="+1 (555) 000-0000"
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f59e0b] transition-colors"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Subject *</label>
//                         <select
//                           name="subject"
//                           required
//                           value={form.subject}
//                           onChange={handleChange}
//                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f59e0b] transition-colors appearance-none"
//                         >
//                           <option value="" className="bg-[#1a1a1a] text-gray-400">Select a subject</option>
//                           <option value="recommendation" className="bg-[#1a1a1a]">Product Recommendation</option>
//                           <option value="order" className="bg-[#1a1a1a]">Order Support</option>
//                           <option value="ingredients" className="bg-[#1a1a1a]">Ingredients & Safety</option>
//                           <option value="partnership" className="bg-[#1a1a1a]">Business Partnership</option>
//                           <option value="other" className="bg-[#1a1a1a]">Other</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Message *</label>
//                       <textarea
//                         name="message"
//                         required
//                         value={form.message}
//                         onChange={handleChange}
//                         rows={5}
//                         placeholder="Tell us about your skin type, routine, concerns, or order query..."
//                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f59e0b] transition-colors resize-none"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full flex items-center justify-center gap-2 bg-[#f59e0b] text-black py-4 rounded-xl font-bold hover:bg-[#fb923c] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
//                     >
//                       {loading ? (
//                         <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
//                       ) : (
//                         <>
//                           <Send className="w-4 h-4" />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import KunziteContact from '../kunzite contact.jpg';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const whatsappNumber = '917895463211';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = [
      'New message from Kunzite website contact form:',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Subject: ${form.subject}`,
      '',
      'Message:',
      form.message,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      {/* Header */}
      <section className="relative py-52 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={KunziteContact}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            Let's Create Your Glow Plan
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Our Kunzite skincare advisors are ready to guide your routine and answer product questions.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Get in touch</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you need product recommendations, order support, or ingredient guidance, we are here to help.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: 'Our Office',
                  value: 'Brij vihar kankhal Haridwar Uttrakhand 249408',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 78954 63211',
                  href: 'tel:+917895463211',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'skinscare26@gmail.com',
                  href: 'mailto:skinscare26@gmail.com',
                },
                {
                  icon: Clock,
                  label: 'Office Hours',
                  value: 'Mon–Fri: 10am – 7pm IST\nSat: 10am – 5pm IST',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm hover:text-[#f59e0b] transition-colors whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#111111] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3458.1374474988374!2d78.13470307544165!3d29.917944974987545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU1JzA0LjYiTiA3OMKwMDgnMTQuMiJF!5e0!3m2!1sen!2sin!4v1777703937892!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Optional overlay icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[#f59e0b] text-black p-3 rounded-full shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[#f59e0b]" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-8 bg-[#f59e0b] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#fb923c] transition-colors text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-white mb-6">Send us a message</h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                      />

                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                      />
                    </div>

                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your Message..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-[#f59e0b] text-black py-4 rounded-xl font-bold hover:bg-[#fb923c]"
                    >
                      {loading ? 'Sending...' : <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}