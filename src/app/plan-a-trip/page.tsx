"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RoamIcon from "@/components/RoamIcon";
import Footer from "@/components/Footer";

interface TerroirOption {
  id: string;
  label: string;
  location: string;
  region: string;
  image: string;
}

const terroirOptions: TerroirOption[] = [
  {
    id: "kyoto",
    label: "Kyoto & Highlands",
    location: "Kyoto, Japan",
    region: "Kansai Highlands",
    image: "/images/roam/plan-blueprint.jpg",
  },
  {
    id: "dolomites",
    label: "Dolomites",
    location: "Dolomites, Italy",
    region: "Val Badia Alps",
    image: "/images/roam/journey-dolomite.jpg",
  },
  {
    id: "amalfi",
    label: "Amalfi Coast",
    location: "Amalfi Coast, Italy",
    region: "Ravello Cliffs",
    image: "/images/roam/journey-amalfi.jpg",
  },
  {
    id: "lofoten",
    label: "Lofoten Archipelago",
    location: "Lofoten, Norway",
    region: "Arctic Fjords",
    image: "/images/roam/category-nordic.jpg",
  },
  {
    id: "marrakech",
    label: "Marrakech & Atlas",
    location: "Marrakech, Morocco",
    region: "Atlas Foothills",
    image: "/images/roam/atlas-marrakech.jpg",
  },
  {
    id: "patagonia",
    label: "Patagonia",
    location: "Patagonia, Chile",
    region: "Torres Glacial",
    image: "/images/roam/category-alpine.jpg",
  },
  {
    id: "swiss",
    label: "Swiss Engadin",
    location: "Swiss Alps, Switzerland",
    region: "Engadin Valley",
    image: "/images/roam/atlas-stmoritz.jpg",
  },
];

export default function PlanTripPage() {
  const [selectedTerroir, setSelectedTerroir] = useState<TerroirOption>(terroirOptions[0]);
  const [destinationInput, setDestinationInput] = useState("Kyoto & Kansai Highlands, Japan");
  const [cadence, setCadence] = useState("curated_exploration");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [privateAviation, setPrivateAviation] = useState(true);
  const [selectedTier, setSelectedTier] = useState("signature");
  const [generateState, setGenerateState] = useState<"idle" | "loading" | "success">("idle");

  const basePerGuest = selectedTier === "reserve" ? 6500 : selectedTier === "signature" ? 9200 : 14000;
  const aviationCost = privateAviation ? 3200 : 0;
  const totalInvestment = adults * basePerGuest + children * (basePerGuest * 0.5) + aviationCost;

  const handleSelectTerroir = (t: TerroirOption) => {
    setSelectedTerroir(t);
    setDestinationInput(`${t.location} (${t.region})`);
  };

  const handleGenerate = () => {
    if (generateState !== "idle") return;
    setGenerateState("loading");
    setTimeout(() => {
      setGenerateState("success");
      setTimeout(() => {
        setGenerateState("idle");
      }, 3000);
    }, 1200);
  };

  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-surface font-body-md text-on-surface">
      <Navbar />

      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          {/* WIZARD INTRO HEADER & STEPPER */}
          <section className="w-full bg-surface-container-low pt-8 pb-12 shadow-sm border-b border-surface-variant/30">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-6">
              {/* Meta Badge & Stepper Sequence */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container shadow-sm self-start border border-surface-container-high/50">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    Bespoke Journey Builder · Stage 01 of 04
                  </span>
                </div>
                <div className="flex items-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="flex items-center gap-1.5 text-primary font-medium">
                    <RoamIcon name="verified" className="text-secondary text-[18px] shrink-0" />
                    Curator Direct Access
                  </span>
                  <span className="hidden sm:inline-block text-outline-variant">•</span>
                  <span className="hidden sm:flex items-center gap-1.5">
                    <RoamIcon name="lock" className="text-[18px] shrink-0" />
                    Private Confidential Dispatch
                  </span>
                </div>
              </div>

              {/* Main Headline Block */}
              <div className="max-w-3xl flex flex-col gap-3">
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Orchestrate Your Private Journey
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Tell our travel architects your vision. We calibrate pacing, private sanctuaries, and logistics into an unhurried, tailor-made itinerary.
                </p>
              </div>

              {/* Visual Stage Stepper Bar */}
              <div className="reveal-on-scroll grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                {/* Step 1 (Active) */}
                <div className="relative bg-surface rounded-xl p-4 shadow-sm flex flex-col gap-2 overflow-hidden border border-secondary/40">
                  <div className="h-1 w-full bg-secondary rounded-full" />
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
                      Stage 01
                    </span>
                    <RoamIcon name="radio_button_checked" className="text-secondary text-[16px] shrink-0" />
                  </div>
                  <p className="font-headline-sm text-headline-sm text-primary">Destination &amp; Terroir</p>
                  <span className="font-label-md text-label-md text-on-surface-variant">Atmospheric Setting</span>
                </div>

                {/* Step 2 */}
                <div className="relative bg-surface-container rounded-xl p-4 flex flex-col gap-2 border border-surface-container-high/40">
                  <div className="h-1 w-full bg-outline-variant/40 rounded-full" />
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                      Stage 02
                    </span>
                    <RoamIcon name="schedule" className="text-outline-variant text-[16px] shrink-0" />
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-surface-variant">Timing &amp; Rhythm</p>
                  <span className="font-label-md text-label-md text-on-surface-variant">Solstice &amp; Cadence</span>
                </div>

                {/* Step 3 */}
                <div className="relative bg-surface-container rounded-xl p-4 flex flex-col gap-2 border border-surface-container-high/40">
                  <div className="h-1 w-full bg-outline-variant/40 rounded-full" />
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                      Stage 03
                    </span>
                    <RoamIcon name="group" className="text-outline-variant text-[16px] shrink-0" />
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-surface-variant">Party &amp; Style</p>
                  <span className="font-label-md text-label-md text-on-surface-variant">Dynamics &amp; Charter</span>
                </div>

                {/* Step 4 */}
                <div className="relative bg-surface-container rounded-xl p-4 flex flex-col gap-2 border border-surface-container-high/40">
                  <div className="h-1 w-full bg-outline-variant/40 rounded-full" />
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                      Stage 04
                    </span>
                    <RoamIcon name="cottage" className="text-outline-variant text-[16px] shrink-0" />
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-surface-variant">Sanctuary Enclaves</p>
                  <span className="font-label-md text-label-md text-on-surface-variant">Estates &amp; Pavilions</span>
                </div>
              </div>
            </div>
          </section>

          {/* SPLIT MATRIX WORKSPACE */}
          <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin py-space-xl w-full min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* LEFT WORKBENCH (7 Columns): FORM INPUTS */}
              <div className="lg:col-span-7 flex flex-col gap-10">
                {/* Field A: Destination Terroir */}
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col gap-5 border border-surface-container-high/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        1
                      </span>
                      <div>
                        <label htmlFor="destination-input" className="font-headline-sm text-headline-sm text-primary block cursor-pointer">
                          Where do you seek stillness?
                        </label>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Select or type your envisioned territory
                        </span>
                      </div>
                    </div>
                    <RoamIcon name="explore" className="w-5 h-5 text-secondary shrink-0" />
                  </div>

                  {/* Search Input Box */}
                  <div className="relative">
                    <RoamIcon name="search" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant shrink-0" />
                    <input
                      id="destination-input"
                      type="text"
                      value={destinationInput}
                      onChange={(e) => setDestinationInput(e.target.value)}
                      placeholder="Search mountains, coastlines, or secluded valleys..."
                      className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low text-on-surface rounded-xl font-body-md text-body-md shadow-inner focus:outline-none focus:bg-surface transition-all placeholder:text-outline border border-surface-container-high/30"
                    />
                  </div>

                  {/* Suggested Terroirs Quick Selection */}
                  <div className="flex flex-col gap-2.5">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                      Curated Enclaves of Season
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {terroirOptions.map((t) => {
                        const active = selectedTerroir.id === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => handleSelectTerroir(t)}
                            className={`px-3.5 py-1.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                              active
                                ? "bg-primary text-on-primary shadow-sm font-semibold"
                                : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                            }`}
                          >
                            {t.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Field B: Travel Calendar & Solstice Duration */}
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col gap-6 border border-surface-container-high/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        2
                      </span>
                      <div>
                        <span className="font-headline-sm text-headline-sm text-primary block">
                          Travel Calendar &amp; Solstice
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Recommended minimum stay: 7 undisturbed nights
                        </span>
                      </div>
                    </div>
                    <RoamIcon name="calendar_today" className="w-5 h-5 text-secondary shrink-0" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Departure Card */}
                    <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-1.5 cursor-pointer hover:bg-surface-container transition-colors border border-surface-container-high/30">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                        Ascent / Departure
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm text-primary">
                          Oct 14, 2025
                        </span>
                        <RoamIcon name="flight_takeoff" className="text-on-surface-variant text-[20px] shrink-0" />
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Autumn Foliage Solstice window
                      </span>
                    </div>

                    {/* Return Card */}
                    <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-1.5 cursor-pointer hover:bg-surface-container transition-colors border border-surface-container-high/30">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                        Descent / Return
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-headline-sm text-headline-sm text-primary">
                          Oct 22, 2025
                        </span>
                        <RoamIcon name="flight_land" className="text-on-surface-variant text-[20px] shrink-0" />
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        8 Nights / 9 Days Calibrated
                      </span>
                    </div>
                  </div>

                  {/* Micro rhythm badge */}
                  <div className="flex items-center gap-3 p-3.5 bg-surface-container rounded-xl text-primary font-body-sm text-body-sm border border-surface-container-high/40">
                    <RoamIcon name="spa" className="text-secondary text-[20px] shrink-0" />
                    <span>Includes 2 intentional acclimatization half-days with private onsen &amp; tea ceremony access.</span>
                  </div>
                </div>

                {/* Field C: Pacing & Atmospheric Cadence */}
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col gap-6 border border-surface-container-high/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        3
                      </span>
                      <div>
                        <span className="font-headline-sm text-headline-sm text-primary block">
                          Pacing &amp; Atmospheric Cadence
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          How deeply would you like your days to unfold?
                        </span>
                      </div>
                    </div>
                    <RoamIcon name="tune" className="w-5 h-5 text-secondary shrink-0" />
                  </div>

                  <div className="flex flex-col gap-3.5">
                    {/* Option 1: Deep Solitude */}
                    <div
                      onClick={() => setCadence("deep_solitude")}
                      className={`relative flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-all border ${
                        cadence === "deep_solitude"
                          ? "bg-primary text-on-primary shadow-md border-primary"
                          : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="pacing_cadence"
                        value="deep_solitude"
                        checked={cadence === "deep_solitude"}
                        onChange={() => setCadence("deep_solitude")}
                        className="mt-1 accent-secondary"
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-headline-sm text-headline-sm ${cadence === "deep_solitude" ? "text-on-primary" : "text-primary"}`}>
                            Deep Solitude &amp; Slow Living
                          </span>
                          <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${cadence === "deep_solitude" ? "bg-surface-container-lowest/20 text-surface" : "bg-surface-container-high text-on-surface-variant"}`}>
                            Single Sanctuary
                          </span>
                        </div>
                        <p className={`font-body-sm text-body-sm ${cadence === "deep_solitude" ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                          Zero frantic transfers. One secluded mountain or coastal compound, bespoke private culinary master, unscripted mornings, and daily wellness rituals.
                        </p>
                      </div>
                    </div>

                    {/* Option 2: Curated Exploration */}
                    <div
                      onClick={() => setCadence("curated_exploration")}
                      className={`relative flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-all border ${
                        cadence === "curated_exploration"
                          ? "bg-primary text-on-primary shadow-md border-primary"
                          : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="pacing_cadence"
                        value="curated_exploration"
                        checked={cadence === "curated_exploration"}
                        onChange={() => setCadence("curated_exploration")}
                        className="mt-1 accent-secondary"
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-headline-sm text-headline-sm ${cadence === "curated_exploration" ? "text-on-primary" : "text-primary"}`}>
                            Curated Exploration
                          </span>
                          <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${cadence === "curated_exploration" ? "bg-secondary-container text-on-secondary-container font-semibold" : "bg-surface-container-high text-on-surface-variant"}`}>
                            Most Favored
                          </span>
                        </div>
                        <p className={`font-body-sm text-body-sm ${cadence === "curated_exploration" ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                          Harmonious split across 2 distinctive terroirs. First-class rail and private chauffeur transfers, intimate atelier visits with master craftsmen.
                        </p>
                      </div>
                    </div>

                    {/* Option 3: Expedition */}
                    <div
                      onClick={() => setCadence("expedition")}
                      className={`relative flex items-start gap-4 p-5 rounded-xl cursor-pointer transition-all border ${
                        cadence === "expedition"
                          ? "bg-primary text-on-primary shadow-md border-primary"
                          : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="pacing_cadence"
                        value="expedition"
                        checked={cadence === "expedition"}
                        onChange={() => setCadence("expedition")}
                        className="mt-1 accent-secondary"
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-headline-sm text-headline-sm ${cadence === "expedition" ? "text-on-primary" : "text-primary"}`}>
                            Expedition &amp; High Terrain
                          </span>
                          <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${cadence === "expedition" ? "bg-surface-container-lowest/20 text-surface" : "bg-surface-container-high text-on-surface-variant"}`}>
                            Dynamic Pacing
                          </span>
                        </div>
                        <p className={`font-body-sm text-body-sm ${cadence === "expedition" ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                          Helicopter point-to-point transit, private alpine guides, off-grid designer shelters, and high-altitude wilderness discovery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Field D: Party Dynamics & Air Logistics */}
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col gap-6 border border-surface-container-high/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        4
                      </span>
                      <div>
                        <span className="font-headline-sm text-headline-sm text-primary block">
                          Party Dynamics &amp; Air Logistics
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Composition and mobility expectations
                        </span>
                      </div>
                    </div>
                    <RoamIcon name="flight" className="w-5 h-5 text-secondary shrink-0" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Guest Count Selectors */}
                    <div className="flex flex-col gap-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-xl border border-surface-container-high/30">
                        <div>
                          <span className="font-label-lg text-label-lg text-primary block font-semibold">
                            Adult Guests
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Age 16 and above
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => adults > 1 && setAdults(adults - 1)}
                            className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer"
                          >
                            <RoamIcon name="remove" className="text-[16px] shrink-0" />
                          </button>
                          <span className="font-headline-sm text-headline-sm text-primary w-4 text-center">
                            {adults}
                          </span>
                          <button
                            type="button"
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer"
                          >
                            <RoamIcon name="add" className="text-[16px] shrink-0" />
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-xl border border-surface-container-high/30">
                        <div>
                          <span className="font-label-lg text-label-lg text-primary block font-semibold">
                            Young Travelers
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Ages 0 to 15
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => children > 0 && setChildren(children - 1)}
                            className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer"
                          >
                            <RoamIcon name="remove" className="text-[16px] shrink-0" />
                          </button>
                          <span className="font-headline-sm text-headline-sm text-primary w-4 text-center">
                            {children}
                          </span>
                          <button
                            type="button"
                            onClick={() => setChildren(children + 1)}
                            className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer"
                          >
                            <RoamIcon name="add" className="text-[16px] shrink-0" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Private Aviation Toggle */}
                    <div className="p-5 bg-surface-container-low rounded-xl flex flex-col justify-between gap-4 border border-surface-container-high/30">
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="aviation-toggle" className="font-label-lg text-label-lg text-primary block font-semibold cursor-pointer">
                            Private Aviation / Heli-Shuttle
                          </label>
                          <input
                            id="aviation-toggle"
                            type="checkbox"
                            checked={privateAviation}
                            onChange={(e) => setPrivateAviation(e.target.checked)}
                            className="w-5 h-5 accent-secondary cursor-pointer"
                          />
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-snug">
                          Priority apron customs, Cessna Caravan, or twin-engine helicopter link directly to sanctuary grounds.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm">
                        <RoamIcon name="airlines" className="text-[16px] shrink-0" />
                        <span>FBO Private Terminal Access Enabled</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Field E: Estimated Investment Tier */}
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col gap-6 border border-surface-container-high/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">
                        5
                      </span>
                      <div>
                        <span className="font-headline-sm text-headline-sm text-primary block">
                          Estimated Investment Tier
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Comprehensive atelier curation fee, private stays &amp; transfers
                        </span>
                      </div>
                    </div>
                    <RoamIcon name="payments" className="w-5 h-5 text-secondary shrink-0" />
                  </div>

                  {/* Tier Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div
                      onClick={() => setSelectedTier("reserve")}
                      className={`p-4 rounded-xl cursor-pointer transition-all flex flex-col gap-1 border ${
                        selectedTier === "reserve"
                          ? "bg-primary text-on-primary shadow-sm border-primary"
                          : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/30"
                      }`}
                    >
                      <span className={`font-label-sm text-label-sm uppercase tracking-wider ${selectedTier === "reserve" ? "text-secondary-container font-semibold" : "text-secondary"}`}>
                        Atelier Reserve
                      </span>
                      <span className={`font-headline-sm text-headline-sm ${selectedTier === "reserve" ? "text-on-primary" : "text-primary"}`}>
                        $8k – $15k
                      </span>
                      <span className={`font-body-sm text-body-sm ${selectedTier === "reserve" ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                        Per traveling guest
                      </span>
                    </div>

                    <div
                      onClick={() => setSelectedTier("signature")}
                      className={`p-4 rounded-xl cursor-pointer transition-all flex flex-col gap-1 border ${
                        selectedTier === "signature"
                          ? "bg-primary text-on-primary shadow-sm border-primary"
                          : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/30"
                      }`}
                    >
                      <span className={`font-label-sm text-label-sm uppercase tracking-wider font-semibold ${selectedTier === "signature" ? "text-secondary-container" : "text-secondary"}`}>
                        Signature Curated
                      </span>
                      <span className={`font-headline-sm text-headline-sm ${selectedTier === "signature" ? "text-on-primary" : "text-primary"}`}>
                        $15k – $25k
                      </span>
                      <span className={`font-body-sm text-body-sm ${selectedTier === "signature" ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                        Per guest (Selected)
                      </span>
                    </div>

                    <div
                      onClick={() => setSelectedTier("sovereign")}
                      className={`p-4 rounded-xl cursor-pointer transition-all flex flex-col gap-1 border ${
                        selectedTier === "sovereign"
                          ? "bg-primary text-on-primary shadow-sm border-primary"
                          : "bg-surface-container-low hover:bg-surface-container border-surface-container-high/30"
                      }`}
                    >
                      <span className={`font-label-sm text-label-sm uppercase tracking-wider ${selectedTier === "sovereign" ? "text-secondary-container font-semibold" : "text-secondary"}`}>
                        Private Sovereign
                      </span>
                      <span className={`font-headline-sm text-headline-sm ${selectedTier === "sovereign" ? "text-on-primary" : "text-primary"}`}>
                        $25k+
                      </span>
                      <span className={`font-body-sm text-body-sm ${selectedTier === "sovereign" ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                        Full estate buyouts &amp; Heli
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-body-sm text-on-surface-variant pt-2">
                    <span>Includes: Concierge on-ground architect, 100% bespoke tailoring, private chefs.</span>
                    <span className="text-secondary font-label-sm text-label-sm font-semibold cursor-pointer underline">
                      Fee Breakdown
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT WORKBENCH (5 Columns): LIVE ITINERARY BLUEPRINT SUMMARY CARD */}
              <div className="reveal-scale lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-6">
                {/* Live Blueprint Card */}
                <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col gap-6 relative overflow-hidden border border-surface-container-high/40">
                  {/* Subtle Top Ambient Glow Ribbon */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

                  {/* Card Header & Status */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                          Live Blueprint
                        </span>
                      </div>
                      <h2 className="font-headline-md text-headline-md text-primary">
                        Journey Architecture
                      </h2>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm border border-surface-container-high/50">
                      Draft ID: RM-9402
                    </div>
                  </div>

                  {/* Destination Visual Showcase */}
                  <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-inner group">
                    <Image
                      src={selectedTerroir.image}
                      alt={selectedTerroir.label}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-5">
                      <span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider font-semibold">
                        Primary Territory
                      </span>
                      <p className="font-headline-sm text-headline-sm text-on-primary">
                        {selectedTerroir.location} Sanctuary
                      </p>
                    </div>
                  </div>

                  {/* Blueprint Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 bg-surface-container-low p-4 rounded-2xl border border-surface-container-high/30">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Duration
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary">
                        9 Days / 8 Nights
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Accompaniment
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary">
                        {children > 0 ? `${adults} Adults, ${children} Children` : `${adults} Guests (Adult)`}
                      </span>
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Terroirs
                      </span>
                      <span className="font-body-md text-body-md text-primary font-medium">
                        2 Private Enclaves
                      </span>
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                        Mobility
                      </span>
                      <span className="font-body-md text-body-md text-primary font-medium">
                        {privateAviation ? "Heli + Private Chauffeur" : "First-Class Rail & Chauffeur"}
                      </span>
                    </div>
                  </div>

                  {/* Assigned Atelier Curator */}
                  <div className="flex items-center gap-3.5 p-3.5 bg-surface-container rounded-2xl border border-surface-container-high/40">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm shrink-0">
                      <Image
                        src="/images/roam/curator-kenzo.jpg"
                        alt="Kenzo Nishida curator portrait"
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="font-label-lg text-label-lg text-primary font-semibold">
                          Kenzo Nishida
                        </span>
                        <RoamIcon name="verified" className="text-secondary text-[16px] shrink-0" />
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Senior Atelier Curator (Japan &amp; Silk Route)
                      </span>
                    </div>
                  </div>

                  {/* Total Investment Calculation & CTA */}
                  <div className="flex flex-col gap-4 pt-2">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          Estimated Investment
                        </span>
                        <p className="font-headline-md text-headline-md text-primary font-normal">
                          ${totalInvestment.toLocaleString()} Total
                        </p>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        All taxes &amp; atelier service incl.
                      </span>
                    </div>

                    {/* Primary Generate Itinerary Action Button */}
                    <button
                      type="button"
                      onClick={handleGenerate}
                      className="w-full py-4 px-6 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md uppercase tracking-wider shadow-lg flex items-center justify-center gap-3 group transition-all cursor-pointer active:scale-95"
                    >
                      {generateState === "idle" && (
                        <>
                          <span>Generate Day-by-Day Draft</span>
                          <RoamIcon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform shrink-0" />
                        </>
                      )}
                      {generateState === "loading" && (
                        <>
                          <span>Calibrating Itinerary...</span>
                          <RoamIcon name="progress_activity" className="animate-spin text-[18px] shrink-0" />
                        </>
                      )}
                      {generateState === "success" && (
                        <>
                          <span>Draft Prepared ✓</span>
                          <RoamIcon name="done" className="text-[18px] shrink-0" />
                        </>
                      )}
                    </button>

                    {/* Trust & Policy Guarantee */}
                    <div className="flex items-center gap-2 justify-center text-on-surface-variant font-body-sm text-body-sm pt-1">
                      <RoamIcon name="verified_user" className="text-[16px] text-secondary shrink-0" />
                      <span>100% Flexible cancellation &amp; 24/7 dedicated travel architect</span>
                    </div>
                  </div>
                </div>

                {/* Additional Curator Assurance Card */}
                <div className="bg-surface-container-low rounded-2xl p-5 flex items-center gap-4 border border-surface-container-high/40">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                    <RoamIcon name="history_edu" className="text-[22px] shrink-0" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg text-primary font-semibold">
                      The ROAM Guarantee
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Every itinerary includes direct cell phone contact with your assigned regional concierge before and during travel.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BOTTOM FLOATING ACTION BAR */}
          <section className="w-full bg-surface-container-low py-6 shadow-md border-t border-surface-variant/30">
            <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Back Navigation Link */}
              <Link
                href="/explore"
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-md text-label-md transition-colors"
              >
                <RoamIcon name="arrow_back" className="text-[18px] shrink-0" />
                <span>Return to Explore</span>
              </Link>

              {/* Progress & Next Step Trigger */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                <div className="hidden md:flex flex-col text-right">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Next: Stage 02
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    Fine-tune Timing &amp; Solstice Daybreak
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span>Continue to Activity Curation</span>
                  <RoamIcon name="chevron_right" className="text-[18px] shrink-0" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
