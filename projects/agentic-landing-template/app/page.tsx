// ============================================================
// REALTOR LANDING PAGE - Rod Alvero (edit name + details)
// ============================================================

import Image from "next/image";
import Link from "next/link";
import { CheckIcon, LinkedInIcon, ArrowRightIcon } from "@/components/Icons";

const REALTOR = {
  name: "Rod Raemon Alvero",
  title: "Realtor",
  area: "San Diego County, CA",
  phone: "(619) 555-0123",
  email: "rod@example.com",
  brokerage: "RA Properties",
  license: "CA DRE #12345678",
  tagline: "Helping you buy and sell with confidence.",
  ctas: {
    primary: "Schedule a Showing",
    secondary: "Get a Free Home Valuation",
  },
  links: {
    linkedin: "https://www.linkedin.com/",
  },
};

const featuredListings = [
  {
    title: "Modern 3BR in Chula Vista",
    price: "$749,000",
    details: "3 Bed • 2 Bath • 1,620 sqft",
    note: "Open House Sat 1–4 PM",
    image: "/images/properties/property-1.jpg",
  },
  {
    title: "Downtown Condo Near Gaslamp",
    price: "$589,000",
    details: "2 Bed • 2 Bath • 1,050 sqft",
    note: "Low HOA • Great views",
    image: "/images/properties/property-2.jpg",
  },
  {
    title: "Family Home in La Mesa",
    price: "$899,000",
    details: "4 Bed • 3 Bath • 2,100 sqft",
    note: "Large backyard • Move-in ready",
    image: "/images/properties/property-3.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Rod made the process simple and kept us updated every step of the way.",
    name: "Client Name",
    type: "Buyer",
  },
  {
    quote:
      "We got multiple offers quickly. Pricing and marketing plan were on point.",
    name: "Client Name",
    type: "Seller",
  },
  {
    quote:
      "Super responsive, honest advice, and strong negotiation. Highly recommend.",
    name: "Client Name",
    type: "Investor",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Skip link for accessibility - allows keyboard users to skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
        {/* ============================================================ */}
        {/* NAVIGATION - Fixed header with logo and nav links            */}
        {/* ============================================================ */}
        <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="#top" className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                RA
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
                {REALTOR.name}
              </span>
              <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                {REALTOR.title}
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link className="hover:opacity-80" href="#listings">
                Listings
              </Link>
              <Link className="hover:opacity-80" href="#services">
                Services
              </Link>
              <Link className="hover:opacity-80" href="#about-agent">
                About
              </Link>
              <Link className="hover:opacity-80" href="/resume">
                Resume
              </Link>
              <Link className="hover:opacity-80" href="#contact">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${REALTOR.phone.replace(/[^\d+]/g, "")}`}
                className="hidden sm:inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
              >
                Call/Text
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </nav>

        {/* ============================================================ */}
        {/* HERO SECTION - Main headline and call to action              */}
        {/* ============================================================ */}
        <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/modern-home-bg.jpg')" }}>
          {/* Overlay for dark mode effect and glassmorphism base */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          {/* Soft glow effects */}
          <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6 drop-shadow-lg">
                {REALTOR.tagline}
              </h1>
              <p className="mt-4 text-lg text-white leading-relaxed">
                I help buyers and sellers move with clarity—fast communication,
                strong negotiation, and a smooth process from tour to closing.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="#listings" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:scale-105 duration-300 ease-in-out">
                  Browse Listings
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-400 hover:bg-teal-500 rounded-xl transition-all shadow-lg shadow-teal-400/25 hover:shadow-teal-400/40 transform hover:scale-105 duration-300 ease-in-out">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURED PROPERTIES SECTION                                  */}
        {/* ============================================================ */}
        <section id="listings" className="py-20 bg-white dark:bg-slate-900 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-12 text-center">
                Featured Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredListings.map((l) => (
                  <div
                    key={l.title}
                    className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden backdrop-blur-sm"
                  >
                    <img src={l.image} alt={l.title} className="w-full h-48 object-cover rounded-t-2xl"/>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{l.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                        <span className="font-bold text-lg text-indigo-500">{l.price}</span> &bull; {l.details}
                      </p>
                      <Link href="#contact" className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium">
                        Request details
                        <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"/>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-12 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight">Services</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Simple, clear support depending on your goal.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Buy a Home",
                  items: [
                    "Home tours and neighborhood guidance",
                    "Offer strategy and negotiation",
                    "Inspection + closing support",
                  ],
                },
                {
                  title: "Sell Your Home",
                  items: [
                    "Pricing strategy using comps",
                    "Marketing plan + showing strategy",
                    "Negotiation to maximize net",
                  ],
                },
                {
                  title: "Invest",
                  items: ["Deal analysis and rental comps", "ROI-focused guidance", "Long-term strategy support"],
                },
                {
                  title: "Relocation",
                  items: ["Virtual tours and planning", "Local area recommendations", "Smooth timeline + coordination"],
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6"
                >
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <div className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
                    {s.items.map((it) => (
                      <div key={it} className="flex items-start gap-2">
                        <span className="mt-0.5">
                          <CheckIcon className="w-5 h-5" />
                        </span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="mt-5 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
                  >
                    Let’s talk
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ABOUT THE AGENT SECTION                                      */}
        {/* ============================================================ */}
        <section id="about-agent" className="py-20 bg-slate-50 dark:bg-slate-950 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image src="/images/agent-headshot.jpg" alt="Agent Headshot" width={192} height={192} className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-indigo-500"/>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                  About {REALTOR.name}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Hi, I’m <span className="font-semibold">{REALTOR.name}</span>. My
                  focus is helping clients make smart decisions with clear guidance,
                  fast responses, and strong negotiation. Whether you’re buying your
                  first home, upgrading, or selling, I’ll keep the process simple
                  and organized from start to finish.
                </p>
                <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Service Area
                    </div>
                    <div className="font-medium">{REALTOR.area}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Strengths
                    </div>
                    <div className="font-medium">Communication • Negotiation</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Support
                    </div>
                    <div className="font-medium">Tours • Offers • Closing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight">Testimonials</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Replace these with real reviews as you collect them.
            </p>

            <div className="mt-6 grid md:grid-cols-3 gap-5">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6"
                >
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    “{t.quote}”
                  </p>
                  <div className="mt-5 text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-slate-500 dark:text-slate-400">
                      {t.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CALL-TO-ACTION BANNER                                        */}
        {/* ============================================================ */}
        <section className="py-20 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact {REALTOR.name} today for a personalized consultation and take the first step towards your new property.
            </p>
            <a href={`tel:${REALTOR.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-indigo-800 bg-white hover:bg-gray-100 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {REALTOR.phone}
            </a>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CONTACT INFORMATION                                          */}
        {/* ============================================================ */}
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Reach out to discuss your real estate needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                  <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {REALTOR.phone}
                </div>
                <div className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                  <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {REALTOR.email}
                </div>
              </div>
              <footer className="mt-8 text-xs text-slate-500 dark:text-slate-400 text-center">
                © {new Date().getFullYear()} {REALTOR.name} • {REALTOR.brokerage} •{" "}
                {REALTOR.license} • Equal Housing Opportunity
              </footer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}