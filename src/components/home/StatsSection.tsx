"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "12", label: "Nam Kinh Nghiem" },
  { number: "700+", label: "Nhan Vien Chinh Thuc" },
  { number: "36+", label: "Truong Hoc" },
  { number: "15K", label: "Phan An Moi Ngay" },
  { number: "640+", label: "Tiec Su Kien/Nam" },
];

export default function StatsSection() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground font-serif">
                {stat.number}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
