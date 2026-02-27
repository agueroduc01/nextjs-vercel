"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    image: "/images/school-canteen.jpg",
    title: "Canteen Truong Hoc",
    desc: "Cung cap dich vu an uong chat luong cho hon 36 truong hoc tren toan quoc, dam bao dinh duong va an toan ve sinh.",
  },
  {
    image: "/images/industrial-meals.jpg",
    title: "Suat An Cong Nghiep",
    desc: "Phuc vu hang ngan suat an moi ngay cho cac khu cong nghiep, nha may voi chat luong dong deu.",
  },
  {
    image: "/images/event-catering.jpg",
    title: "Dich Vu Tiec Ngoai",
    desc: "Tu tiec cocktail sang trong den tiec buffet quy mo lon, chung toi mang den trai nghiem am thuc dang cap.",
  },
  {
    image: "/images/office-meals.jpg",
    title: "Phan An Van Phong",
    desc: "Giai phap bua trua tien loi va chat luong cho doanh nghiep, giao tan noi moi ngay.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Dich Vu Cua Chung Toi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground font-serif text-balance">
            Giai Phap Am Thuc Toan Dien
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[16/10] rounded-lg overflow-hidden"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/50 group-hover:bg-foreground/60 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-background font-serif">{s.title}</h3>
                <p className="mt-2 text-background/80 text-sm leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/dich-vu"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors rounded"
          >
            Xem Tat Ca Dich Vu
          </Link>
        </div>
      </div>
    </section>
  );
}
