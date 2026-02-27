import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import PageBanner from "@/src/components/PageBanner";
import AboutContent from "@/src/components/about/AboutContent";
import Timeline from "@/src/components/about/Timeline";
import Values from "@/src/components/about/Values";

export const metadata: Metadata = {
  title: "Gioi Thieu - The Caterers",
  description:
    "Tim hieu ve The Caterers - doanh nghiep dan dau trong viec cung cap cac dich vu thuc pham da dang tren khap ca nuoc tu nam 2006.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Gioi Thieu"
          subtitle="Tim hieu ve hanh trinh va su menh cua The Caterers"
          image="/images/about-team.jpg"
        />
        <AboutContent />
        <Timeline />
        <Values />
      </main>
      <Footer />
    </>
  );
}
