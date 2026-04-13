import React from "react";
import { Shield, Lock, Eye, FileText, UserCheck, Mail, Cookie, Database } from "lucide-react";

const Section = ({ title, icon: Icon, children }) => (
  <section className="mb-10">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="w-5 h-5 text-blue-600" />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="text-gray-600 leading-relaxed space-y-3">
      {children}
    </div>
  </section>
);

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: March 25, 2026
          </p>
        </div>

        <Section title="Introduction" icon={FileText}>
          <p>
            We value your privacy and are committed to protecting your personal
            information. This page explains how we collect and use your data.
          </p>
        </Section>

        <Section title="Information We Collect" icon={Database}>
          <ul className="list-disc ml-5 space-y-1">
            <li>Name, email, phone number</li>
            <li>Booking and payment details</li>
            <li>Device and usage information</li>
          </ul>
        </Section>

        <Section title="How We Use Data" icon={Eye}>
          <ul className="list-disc ml-5 space-y-1">
            <li>To process bookings</li>
            <li>To improve user experience</li>
            <li>To provide customer support</li>
            <li>To send important updates</li>
          </ul>
        </Section>

        <Section title="Cookies" icon={Cookie}>
          <p>
            We use cookies to enhance your experience. You can disable them in
            your browser settings.
          </p>
        </Section>

        <Section title="Data Security" icon={Lock}>
          <p>
            We use secure systems and encryption to protect your personal data.
          </p>
        </Section>

        <Section title="Your Rights" icon={UserCheck}>
          <p>
            You have the right to access, update, or delete your personal data at
            any time.
          </p>
        </Section>

        <Section title="Contact Us" icon={Mail}>
          <p>If you have any questions, contact us at:</p>
          <a
            href="mailto:support@yourwebsite.com"
            className="text-blue-600 font-medium underline"
          >
            support@yourwebsite.com
          </a>
        </Section>

      </div>
    </div>
  );
}
