// ============================================================
// REALTOR LANDING PAGE - Rod Alvero (edit name + details)
// ============================================================

import Image from "next/image";
import Link from "next/link";
import { CheckIcon, LinkedInIcon } from "@/components/Icons";

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
    image: "/listing1.jpg",
  },
  {
    title: "Downtown Condo Near Gaslamp",
    price: "$589,000",
    details: "2 Bed • 2 Bath • 1,050 sqft",
    note: "Low HOA • Great views",
    image: "/listing2.jpg",
  },
  {
    title: "Family Home in La Mesa",
    price: "$899,000",
    details: "4 Bed • 3 Bath • 2,100 sqft",
    note: "Large backyard • Move-in ready",
    image: "/listing3.jpg",
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
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Keep normal <a> for hash links so scrolling works reliably */}
          <a href="#top" className="font-semibold tracking-tight">
            {REALTOR.name}
            <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
              {REALTOR.title}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#listings">
              Listings
            </a>
            <a className="hover:opacity-80" href="#services">
              Services
            </a>
            <a className="hover:opacity-80" href="#about">
              About
            </a>

            {/* Use Link ONLY for real routes/pages */}
            <Link className="hover:opacity-80" href="/resume">
              Resume
            </Link>

            <a className="hover:opacity-80" href="#contact">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${REALTOR.phone.replace(/[^\d+]/g, "")}`}
              className="hidden sm:inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
            >
              Call/Text
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="pt-28 pb-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Serving <span className="font-semibold">{REALTOR.area}</span>
              </p>

              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                {REALTOR.tagline}
              </h1>

              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I help buyers and sellers move with clarity—fast communication,
                strong negotiation, and a smooth process from tour to closing.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
                >
                  {REALTOR.ctas.primary}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  {REALTOR.ctas.secondary}
                </a>
              </div>

              <div className="mt-7 grid sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-200">
                {[
                  "Responsive communication",
                  "Data-driven pricing strategy",
                  "Skilled negotiation",
                  "Clear step-by-step guidance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-0.5">
                      <CheckIcon className="w-5 h-5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm">
                <div className="text-slate-600 dark:text-slate-300">
                  {REALTOR.brokerage} • {REALTOR.license}
                </div>
                {REALTOR.links.linkedin ? (
                  <a
                    href={REALTOR.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:opacity-80"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                ) : null}
              </div>
            </div>

            {/* HERO IMAGE + QUICK CONTACT */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
                {/* Hero Image */}
                <div className="relative h-56 sm:h-64">
                  <Image
                    src="/hero-house.jpg"
                    alt="Featured home"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                    Featured Home
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="p-6">
                  <h2 className="text-lg font-semibold">Quick Contact</h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Reach me anytime—fast replies.
                  </p>

                  <div className="mt-4 grid gap-3">
                    <a
                      className="rounded-2xl px-4 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-950"
                      href={`tel:${REALTOR.phone.replace(/[^\d+]/g, "")}`}
                    >
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Call/Text
                      </div>
                      <div className="font-medium">{REALTOR.phone}</div>
                    </a>

                    <a
                      className="rounded-2xl px-4 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-950"
                      href={`mailto:${REALTOR.email}`}
                    >
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Email
                      </div>
                      <div className="font-medium">{REALTOR.email}</div>
                    </a>

                    <div className="rounded-2xl px-4 py-3 border border-slate-300 dark:border-slate-700">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Specialty
                      </div>
                      <div className="font-medium">
                        First-time buyers • VA buyers • Relocation
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    *Listings shown may be examples/placeholders. Replace with
                    real MLS data or your brokerage listings page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section id="listings" className="py-12 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Featured Listings
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                A few homes clients are loving right now.
              </p>
            </div>
            <a href="#contact" className="text-sm font-medium hover:opacity-80">
              Want a custom list? → Contact me
            </a>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {featuredListings.map((l) => (
              <div
                key={l.title}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden"
              >
                <div className="relative h-44">
                  <Image
                    src={l.image}
                    alt={l.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {l.note}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{l.title}</h3>
                  <div className="mt-1 text-2xl font-bold">{l.price}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {l.details}
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-950"
                  >
                    Request details
                  </a>
                </div>
              </div>
            ))}
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
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
                >
                  Let’s talk
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-7">
            <h2 className="text-2xl font-bold tracking-tight">About</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Hi, I’m <span className="font-semibold">{REALTOR.name}</span>. My
              focus is helping clients make smart decisions with clear guidance,
              fast responses, and strong negotiation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-7">
            <h2 className="text-2xl font-bold tracking-tight">
              Contact {REALTOR.name}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Tell me what you’re looking for and I’ll reply quickly.
            </p>
          </div>

          <footer className="mt-8 text-xs text-slate-500 dark:text-slate-400 text-center">
            © {new Date().getFullYear()} {REALTOR.name} • {REALTOR.brokerage} •{" "}
            {REALTOR.license} • Equal Housing Opportunity
          </footer>
        </div>
      </section>
    </main>
  );
}
