"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RoamIcon from "@/components/RoamIcon";
import Footer from "@/components/Footer";

interface FaqItem {
  question: string;
  answer: string;
}

const faqsData: FaqItem[] = [
  {
    question: "How does ROAM access unlisted private properties?",
    answer:
      "Our collection is curated through direct family-office relationships, private architectural foundations, and generational estate owners who do not participate in commercial luxury directories. ROAM travelers gain access via vetted introductions and contractual custodial care agreements managed exclusively by our Zurich desk.",
  },
  {
    question: "What is the atelier planning fee structure?",
    answer:
      "We operate under an upfront design retainer commensurate with itinerary scope—typically starting at $2,500 for a single-destination commission and $5,000 for multi-region grand journeys. This retainer provides dedicated architecture time, private villa negotiation, and priority slot reservations. Retainers are credited towards the overall travel dossier upon itinerary confirmation.",
  },
  {
    question: "Can ROAM coordinate private aviation and superyacht charters?",
    answer:
      "Yes. Our dedicated Aviation & Maritime Desk works with Argus Platinum-certified operators worldwide. From long-range intercontinental jets (Bombardier Global 7500, Gulfstream G650) to explorer superyachts in the Norwegian fjords or Mediterranean, our team handles all FBO ground transfers, customs clearances, and bespoke provisioning.",
  },
  {
    question: "What on-ground concierge support is provided during active journeys?",
    answer:
      "Clients are assigned a lead private host alongside an encrypted direct WhatsApp/Signal liaison available 24 hours a day. Should weather shift, plans pivot, or spontaneous desires emerge (e.g. private helicopter transfer to an Alpine fondue chalet), our local fixers execute changes with absolute seamlessness.",
  },
];

export default function ContactPage() {
  const [salutation, setSalutation] = useState("Mr.");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [terroir, setTerroir] = useState("Engadin Valley & Swiss Alpine Retreats");
  const [departureWindow, setDepartureWindow] = useState("");
  const [duration, setDuration] = useState("7 to 10 Days");
  const [budget, setBudget] = useState("50k");
  const [notes, setNotes] = useState("");
  const [dispatchOptIn, setDispatchOptIn] = useState(true);

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && email && phone) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setDepartureWindow("");
    setNotes("");
  };

  return (
    <div suppressHydrationWarning className="bg-surface text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />

      <main className="w-full pt-20 bg-surface flex-grow min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* Atmospheric Background Ambient Glow */}
          <div className="relative w-full max-w-[1320px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-2xl">
            <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-surface-tint/5 blur-[120px] pointer-events-none -z-10" />

            {/* Editorial Header Block */}
            <header className="reveal-on-scroll max-w-4xl flex flex-col gap-space-sm mb-space-2xl">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Private Client Services · Bespoke Enquiries
                </p>
              </div>
              <h1 className="font-display-hero text-display-hero text-primary tracking-tight font-normal">
                Initiate Your Atelier Consultation
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Whether commissioning a private island buyout, seeking multi-generational itinerary design, or requesting discreet diplomatic-grade travel arrangements, our lead travel architects are at your service.
              </p>
            </header>

            {/* Two-Column Luxury Consultation Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Left Column: Atelier Sanctuaries & Channels */}
              <div className="reveal-left lg:col-span-5 flex flex-col gap-space-xl">
                {/* Global Offices Card */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_4px_20px_-2px_rgba(37,41,37,0.04),0_2px_6px_-1px_rgba(197,167,122,0.08)] border border-surface-variant/40">
                  <div className="flex items-center justify-between pb-space-md mb-space-md border-b border-surface-container">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">
                      Global Ateliers
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Timezones: CET · GMT · JST
                    </span>
                  </div>

                  <div className="space-y-space-lg">
                    {/* Zurich */}
                    <div className="group">
                      <div className="flex items-baseline justify-between">
                        <h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-medium">
                          Zürich Headquarters
                        </h2>
                        <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded font-semibold">
                          Primary Vault
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Bahnhofstrasse 42, 8001 Zürich, Switzerland
                      </p>
                      <a
                        className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-2 hover:text-secondary transition-colors"
                        href="tel:+41442109980"
                      >
                        <RoamIcon name="call" className="text-[16px] shrink-0" />
                        +41 44 210 9980
                      </a>
                    </div>

                    <div className="w-full h-px bg-surface-container" />

                    {/* London */}
                    <div className="group">
                      <div className="flex items-baseline justify-between">
                        <h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-medium">
                          London Studio
                        </h2>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Mayfair
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        14 Berkeley Square, Mayfair, London W1J 6BL, UK
                      </p>
                      <a
                        className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-2 hover:text-secondary transition-colors"
                        href="tel:+442079460192"
                      >
                        <RoamIcon name="call" className="text-[16px] shrink-0" />
                        +44 20 7946 0192
                      </a>
                    </div>

                    <div className="w-full h-px bg-surface-container" />

                    {/* Tokyo */}
                    <div className="group">
                      <div className="flex items-baseline justify-between">
                        <h2 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-medium">
                          Tokyo Atelier
                        </h2>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          Aoyama
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                        Minami-Aoyama 5-Chome, Minato-ku, Tokyo 107-0062, Japan
                      </p>
                      <a
                        className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-2 hover:text-secondary transition-colors"
                        href="tel:+81355550144"
                      >
                        <RoamIcon name="call" className="text-[16px] shrink-0" />
                        +81 3 5555 0144
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Atelier Desks */}
                <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md border border-surface-variant/40">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">
                    Discrete Channels
                  </span>
                  <div className="grid grid-cols-1 gap-space-sm">
                    <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest border border-surface-variant/30">
                      <div className="flex items-center gap-3">
                        <RoamIcon name="room_service" className="w-5 h-5 text-secondary shrink-0" />
                        <div>
                          <span className="font-label-md text-label-md block text-primary font-semibold">
                            Dedicated Concierge
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Round-the-clock dossier lead
                          </span>
                        </div>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-secondary hover:underline"
                        href="mailto:concierge@roamtravel.atelier"
                      >
                        concierge@roamtravel.atelier
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest border border-surface-variant/30">
                      <div className="flex items-center gap-3">
                        <RoamIcon name="flight" className="w-5 h-5 text-secondary shrink-0" />
                        <div>
                          <span className="font-label-md text-label-md block text-primary font-semibold">
                            Private Aviation Desk
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            FBO &amp; slot logistics
                          </span>
                        </div>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-secondary hover:underline"
                        href="mailto:flightdesk@roamtravel.atelier"
                      >
                        flightdesk@roamtravel.atelier
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest border border-surface-variant/30">
                      <div className="flex items-center gap-3">
                        <RoamIcon name="local_library" className="w-5 h-5 text-secondary shrink-0" />
                        <div>
                          <span className="font-label-md text-label-md block text-primary font-semibold">
                            Press &amp; Cultural Relations
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Institutional commissions
                          </span>
                        </div>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-secondary hover:underline"
                        href="mailto:press@roamtravel.atelier"
                      >
                        press@roamtravel.atelier
                      </a>
                    </div>
                  </div>

                  {/* Operating Standards */}
                  <div className="mt-space-sm pt-space-sm flex flex-col gap-2 border-t border-surface-variant/30">
                    <div className="flex items-start gap-2.5">
                      <RoamIcon name="schedule" className="text-secondary text-[18px] mt-0.5 shrink-0" />
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        <strong className="font-semibold text-primary">Atelier Hours:</strong> 24 Hours Daily for Active Travellers; Consultations Monday–Saturday.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <RoamIcon name="verified_user" className="text-secondary text-[18px] mt-0.5 shrink-0" />
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        <strong className="font-semibold text-primary">Security &amp; Discretion:</strong> All communications protected under client NDA and biometric data retention protocols.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Curated Destination Visual Vignette */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-60 border border-surface-variant/40">
                  <Image
                    src="/images/roam/contact-lake-como.jpg"
                    alt="Intimate morning light spilling over a serene private minimalist villa in Lake Como Italy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-space-md flex flex-col justify-end text-on-primary">
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                      Sanctuary Snapshot
                    </span>
                    <p className="font-headline-sm text-headline-sm">
                      Villa Sola Cabiati · Private Lake Como Reserve
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bespoke Travel Commission Dossier (Form) */}
              <div className="reveal-right lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-[0_12px_32px_-4px_rgba(38,63,54,0.06),0_4px_12px_-2px_rgba(197,167,122,0.12)] border border-surface-variant/40">
                <div className="flex items-center justify-between pb-space-md mb-space-lg border-b border-surface-container">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1 font-semibold">
                      Commission Protocol
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary">
                      Private Traveler Dossier
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <RoamIcon name="edit_note" className="w-5 h-5 text-secondary shrink-0" />
                  </div>
                </div>

                {submitted ? (
                  <div className="py-8 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-md">
                      <RoamIcon name="task_alt" className="text-3xl shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-primary mb-2">
                        Dossier Received at Head Atelier
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
                        Your consultation request for <strong>{fullName}</strong> has been encrypted and routed directly to a Senior Travel Architect in Zürich. You will receive private correspondence within 4 business hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-surface-variant/40 text-left w-full max-w-md mt-2 space-y-1.5 text-body-sm text-on-surface-variant">
                      <div className="flex justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-semibold">Terroir:</span>
                        <span>{terroir}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-semibold">Investment:</span>
                        <span>${budget.replace("k", ",000+")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-semibold">Contact:</span>
                        <span>{email}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors cursor-pointer"
                      >
                        Submit Another Dossier
                      </button>
                      <Link
                        href="/my-trips"
                        className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors"
                      >
                        View My Trips Hub
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-space-md" id="atelier-inquiry-form">
                    {/* Name & Salutation Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-space-sm">
                      <div className="sm:col-span-1 flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-primary font-medium">
                          Salutation
                        </label>
                        <div className="relative">
                          <select
                            value={salutation}
                            onChange={(e) => setSalutation(e.target.value)}
                            className="w-full bg-surface px-3 py-2.5 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary appearance-none cursor-pointer border border-surface-variant/40"
                          >
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Ms.</option>
                            <option>Dr.</option>
                            <option>Lady</option>
                            <option>Lord</option>
                          </select>
                          <RoamIcon name="expand_more" className="text-on-surface-variant pointer-events-none absolute right-2.5 top-3 text-[18px] shrink-0" />
                        </div>
                      </div>

                      <div className="sm:col-span-3 flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-primary font-medium">
                          Full Name <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Alistair Vance-Montague"
                          className="w-full bg-surface px-4 py-2.5 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary border border-surface-variant/40"
                        />
                      </div>
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-primary font-medium">
                          Confidential Email <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@private-familyoffice.com"
                          className="w-full bg-surface px-4 py-2.5 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary border border-surface-variant/40"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-primary font-medium">
                          Direct Telephone (inc. country code) <span className="text-secondary">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 7700 900077"
                          className="w-full bg-surface px-4 py-2.5 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary border border-surface-variant/40"
                        />
                      </div>
                    </div>

                    {/* Destination / Terroir Preferences */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium">
                        Preferred Destination(s) or Terroir
                      </label>
                      <div className="relative">
                        <select
                          value={terroir}
                          onChange={(e) => setTerroir(e.target.value)}
                          className="w-full bg-surface px-4 py-2.5 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary appearance-none cursor-pointer border border-surface-variant/40"
                        >
                          <option>Engadin Valley &amp; Swiss Alpine Retreats</option>
                          <option>Cycladic Private Island Enclaves (Greece)</option>
                          <option>Kyoto Imperial Hinterlands &amp; Ryokans (Japan)</option>
                          <option>Patagonian Icefields &amp; Estancias (Chile/Argentina)</option>
                          <option>Amalfi Private Cliffs &amp; Capri Charters (Italy)</option>
                          <option>Multiple Terroirs / Custom Transcontinental Itinerary</option>
                        </select>
                        <RoamIcon name="expand_more" className="text-on-surface-variant pointer-events-none absolute right-3 top-3 text-[18px] shrink-0" />
                      </div>
                    </div>

                    {/* Window & Duration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-primary font-medium">
                          Anticipated Departure Window
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={departureWindow}
                            onChange={(e) => setDepartureWindow(e.target.value)}
                            placeholder="e.g. Solstice June 2025"
                            className="w-full bg-surface px-4 py-2.5 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary border border-surface-variant/40"
                          />
                          <RoamIcon name="calendar_today" className="text-outline-variant absolute right-3 top-3 text-[18px] shrink-0" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-primary font-medium">
                          Duration of Stay
                        </label>
                        <div className="relative">
                          <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="w-full bg-surface px-4 py-2.5 rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary appearance-none cursor-pointer border border-surface-variant/40"
                          >
                            <option>7 to 10 Days</option>
                            <option>2 Weeks (Curated Two-Stage)</option>
                            <option>3 to 4 Weeks (Grand Tour)</option>
                            <option>Extended Sabbatical (1 Month+)</option>
                          </select>
                          <RoamIcon name="expand_more" className="text-on-surface-variant pointer-events-none absolute right-3 top-3 text-[18px] shrink-0" />
                        </div>
                      </div>
                    </div>

                    {/* Estimated Investment Scope */}
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-primary font-medium">
                        Estimated Itinerary Investment Scope
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { val: "25k", label: "$25,000+" },
                          { val: "50k", label: "$50,000+" },
                          { val: "100k", label: "$100,000+" },
                          { val: "uncapped", label: "Uncapped" },
                        ].map((tier) => (
                          <label key={tier.val} className="cursor-pointer">
                            <input
                              type="radio"
                              name="budget"
                              value={tier.val}
                              checked={budget === tier.val}
                              onChange={() => setBudget(tier.val)}
                              className="peer sr-only"
                            />
                            <div className="text-center py-2.5 px-3 rounded-lg bg-surface peer-checked:bg-primary peer-checked:text-on-primary transition-all text-on-surface font-label-md text-label-md hover:bg-surface-container border border-surface-variant/40 peer-checked:border-primary">
                              {tier.label}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Special Provisions & Discretion Details */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-primary font-medium">
                        Special Considerations &amp; Logistical Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Specify private aviation requirements, superyacht berths, private culinary staff, dietary needs, or dedicated security logistics..."
                        className="w-full bg-surface px-4 py-2.5 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary resize-none border border-surface-variant/40"
                      />
                    </div>

                    {/* Solstice Newsletter Opt-In */}
                    <div className="flex items-center gap-3 pt-space-xs">
                      <input
                        type="checkbox"
                        id="dispatch-opt"
                        checked={dispatchOptIn}
                        onChange={(e) => setDispatchOptIn(e.target.checked)}
                        className="w-4 h-4 rounded text-primary focus:ring-secondary cursor-pointer"
                      />
                      <label
                        htmlFor="dispatch-opt"
                        className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none"
                      >
                        I wish to receive the biannual ROAM Solstice print dispatch and invitation-only preview of unlisted architectural acquisitions.
                      </label>
                    </div>

                    {/* Submission Action & Guarantee Note */}
                    <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-[0_4px_16px_rgba(16,41,33,0.3)] hover:bg-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                      >
                        <span>Submit Atelier Commission Request</span>
                        <RoamIcon name="arrow_forward" className="text-[18px] shrink-0" />
                      </button>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-right">
                        Response commitment: <strong className="text-primary font-medium">Within 4 business hours</strong>
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Editorial Spacing Divider */}
            <div className="my-space-2xl flex items-center justify-center">
              <div className="w-24 h-px bg-secondary/30" />
              <span className="mx-4 font-headline-sm text-headline-sm text-secondary italic">
                ✦
              </span>
              <div className="w-24 h-px bg-secondary/30" />
            </div>

            {/* Atelier FAQ Section: Structured Editorial Accordion */}
            <section className="reveal-on-scroll max-w-4xl mx-auto min-h-[450px] flex flex-col justify-center">
              <div className="text-center mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1 font-semibold">
                  Answers to Common Inquiries
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Frequently Asked Private Client Inquiries
                </h2>
              </div>

              <div className="space-y-space-md">
                {faqsData.map((faq, index) => {
                  const isOpen = expandedFaq === index;
                  return (
                    <div
                      key={index}
                      data-delay={index * 100}
                      className="reveal-on-scroll bg-surface-container-lowest rounded-xl p-space-lg shadow-sm cursor-pointer transition-all hover:bg-surface-container-low border border-surface-variant/40 hover-float"
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-headline-sm text-headline-sm text-primary font-medium">
                          {faq.question}
                        </h3>
                        <RoamIcon
                          name="add"
                          className={`w-5 h-5 text-secondary transition-transform duration-200 shrink-0 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </div>

                      {isOpen && (
                        <div className="pt-space-md mt-space-sm border-t border-surface-container animate-in fade-in duration-200">
                          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
