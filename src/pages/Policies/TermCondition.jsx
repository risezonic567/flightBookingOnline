import React from "react";
import { FileText, ShieldCheck, CreditCard, AlertTriangle, UserCheck, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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

export default function TermsCondition() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: March 25, 2026
          </p>
        </div>

        <Section title="Acceptance of Terms" icon={UserCheck}>
          <p>
            By using our website, you agree to follow these terms and conditions.
            If you do not agree, please do not use our services.
          </p>
        </Section>

        <Section title="Use of Services" icon={ShieldCheck}>
          <ul className="list-disc ml-5 space-y-1">
            <li>You must provide accurate information</li>
            <li>You are responsible for your account activity</li>
            <li>Misuse of services is strictly prohibited</li>
          </ul>
        </Section>

        <Section title="Payments & Bookings" icon={CreditCard}>
          <p>
            All bookings are subject to availability and payment confirmation.
            Prices may change without prior notice.
          </p>
        </Section>

        <Section title="Cancellations & Refunds" icon={AlertTriangle}>
          <p>
            Cancellation and refund policies depend on the airline or service
            provider. Please review details before booking.
          </p>
        </Section>

        <Section title="Limitation of Liability" icon={ShieldCheck}>
          <p>
            We are not responsible for any direct or indirect damages arising
            from the use of our platform.
          </p>
        </Section>

        <Section title="Contact Us" icon={Mail}>
          <p>If you have any questions, contact us at:</p>
          <Link
            to="mailto:support@yourwebsite.com"
            className="text-blue-600 font-medium underline"
          >
            support@yourwebsite.com
          </Link>
        </Section>

      </div>
    </div>
  );
}
