import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import FeaturedJourneys from "@/components/FeaturedJourneys";
import AtelierMethodology from "@/components/AtelierMethodology";
import JournalSection from "@/components/JournalSection";
import InvitationCta from "@/components/InvitationCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-surface font-body-md text-on-surface">
      <Navbar />
      <main className="w-full pt-20 bg-surface flex-grow">
        <HeroSection />
        <CategoryCards />
        <FeaturedJourneys />
        <AtelierMethodology />
        <JournalSection />
        <InvitationCta />
      </main>
      <Footer />
    </div>
  );
}
