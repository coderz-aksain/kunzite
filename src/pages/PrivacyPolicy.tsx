import { Lock } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content:
      'We collect personal details you provide, such as name, email, contact number, and shipping address, along with technical usage data from website interactions.',
  },
  {
    title: '2. How We Use Information',
    content:
      'Your information is used to process orders, provide customer support, improve products, personalize communication, and maintain platform security.',
  },
  {
    title: '3. Marketing Communication',
    content:
      'With your consent, we may send updates about new launches, offers, and skincare education. You can opt out of marketing communication anytime.',
  },
  {
    title: '4. Data Sharing',
    content:
      'We do not sell personal data. Information may be shared with trusted partners for logistics, payment processing, and operational support under confidentiality obligations.',
  },
  {
    title: '5. Cookies and Analytics',
    content:
      'Cookies help us improve site performance, analyze traffic, and provide a smoother shopping experience. You can manage cookie preferences via browser settings.',
  },
  {
    title: '6. Data Security',
    content:
      'We use commercially reasonable safeguards to protect personal data. While we maintain strong controls, no online system can guarantee absolute security.',
  },
  {
    title: '7. Data Retention',
    content:
      'Information is retained only as long as needed for order fulfillment, service delivery, legal compliance, and dispute resolution.',
  },
  {
    title: '8. Your Rights',
    content:
      'You may request access, correction, or deletion of your personal data, subject to applicable legal and operational requirements.',
  },
  {
    title: '9. Child Privacy',
    content:
      'Kunzite services are not intended for children under 13 years. We do not knowingly collect personal information from children.',
  },
  {
    title: '10. Policy Updates',
    content:
      'This Privacy Policy may be updated periodically. Revisions become effective when published on this page with an updated date.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="py-20 bg-[#0d0d0d] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#f59e0b]" />
            </div>
            <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest">Kunzite Legal</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">
            Last updated: <span className="text-gray-300">April 25, 2026</span>
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            This policy describes how Kunzite collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="border-b border-white/5 pb-10 last:border-0">
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-gray-400 leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-2xl">
            <h3 className="text-white font-bold mb-2 text-lg">Privacy concerns or requests?</h3>
            <p className="text-gray-400 text-sm mb-4">
              For privacy-related questions, contact our support team.
            </p>
            <a
              href="mailto:skinscare26@gmail.com"
              className="inline-flex items-center gap-2 text-[#f59e0b] text-sm font-semibold hover:underline"
            >
              skinscare26@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
