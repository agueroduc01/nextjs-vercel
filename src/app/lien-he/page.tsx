import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import PageBanner from "@/src/components/PageBanner";
import ContactForm from "@/src/components/contact/ContactForm";
import ContactInfo from "@/src/components/contact/ContactInfo";
import ContactMap from "@/src/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Lien He - The Caterers",
  description:
    "Lien he voi The Caterers de duoc tu van va bao gia dich vu am thuc chuyen nghiep.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Lien He"
          subtitle="Chung toi luon san sang lang nghe va ho tro ban"
          image="/images/hero-catering.jpg"
        />
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
