import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import PageBanner from "@/src/components/PageBanner";
import ServicesList from "@/src/components/services/ServicesList";
import ServicesCTA from "@/src/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Dich Vu - The Caterers",
  description:
    "Kham pha cac dich vu am thuc cua The Caterers: can tin truong hoc, suat an cong nghiep, tiec ngoai va phan an van phong.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Dich Vu"
          subtitle="Giai phap am thuc toan dien cho moi nhu cau"
          image="/images/event-catering.jpg"
        />
        <ServicesList />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
