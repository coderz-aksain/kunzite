import { FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing and using Kunzite websites, products, and services, you agree to these Terms and Conditions and all applicable laws.',
  },
  {
    title: '2. Product Information',
    content:
      'We aim to provide accurate product descriptions, ingredient details, and usage guidance. Actual results may vary by skin type and routine consistency.',
  },
  {
    title: '3. Orders and Payments',
    content:
      'All orders are subject to stock availability and payment confirmation. Kunzite reserves the right to cancel or limit orders in case of pricing or inventory errors.',
  },
  {
    title: '4. Shipping and Delivery',
    content:
      'Delivery timelines are estimates and may vary by location, courier performance, and external factors. Shipping delays do not automatically qualify for refunds.',
  },
  {
    title: '5. Returns and Refunds',
    content:
      'Returns are accepted only as per our return policy. Opened or used products may not be eligible for return unless they are defective or damaged on arrival.',
  },
  {
    title: '6. Responsible Use',
    content:
      'Kunzite products are intended for external cosmetic use only unless explicitly stated otherwise. Patch testing is recommended before first use.',
  },
  {
    title: '7. Intellectual Property',
    content:
      'All Kunzite content, branding, product names, visuals, and design assets are protected by applicable intellectual property laws and may not be reused without permission.',
  },
  {
    title: '8. Limitation of Liability',
    content:
      'Kunzite is not liable for indirect or consequential losses related to product use, order delays, or website unavailability to the extent permitted by law.',
  },
  {
    title: '9. Governing Law',
    content:
      'These terms are governed by the laws applicable in India. Disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.',
  },
  {
    title: '10. Changes to Terms',
    content:
      'We may revise these Terms from time to time. Continued use of our website or services after updates means you accept the revised Terms.',
  },
];

export default function TermsConditions() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="py-20 bg-[#0d0d0d] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center">
              <FileText className="w-7 h-7 text-[#f59e0b]" />
            </div>
            <p className="text-[#f59e0b] text-lg font-bold uppercase tracking-widest">Kunzite Legal</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Terms & Conditions</h1>
          <p className="text-gray-400 text-lg">
            Last updated: <span className="text-gray-300">April 25, 2026</span>
          </p>
          <p className="text-gray-400 mt-6 leading-relaxed text-xl">
            Please read these Terms and Conditions carefully before using Kunzite services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {sections.map((section, i) => (
              <div key={i} className="border-b border-white/5 pb-12 last:border-0">
                <h2 className="text-2xl font-bold text-white mb-5">{section.title}</h2>
                <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-2xl">
            <h3 className="text-white font-bold text-2xl mb-3">Questions about our terms?</h3>
            <p className="text-gray-400 text-lg mb-6">
              For legal or compliance queries, please contact us.
            </p>
            <a
              href="mailto:legal@kunzitebeauty.com"
              className="inline-flex items-center gap-2 text-[#f59e0b] text-lg font-semibold hover:underline"
            >
              legal@kunzitebeauty.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
