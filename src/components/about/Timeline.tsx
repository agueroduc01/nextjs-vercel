"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2006",
    title: "Thanh Lap",
    desc: "The Caterers ra doi voi y tuong san xuat va giao tan noi banh mi sandwich dong goi san.",
  },
  {
    year: "2010",
    title: "Mo Rong Dich Vu",
    desc: "Bat dau cung cap dich vu can tin truong hoc va suat an cong nghiep tai TP. Ho Chi Minh.",
  },
  {
    year: "2014",
    title: "Phat Trien Toan Quoc",
    desc: "Mo rong hoat dong ra cac tinh thanh tren ca nuoc voi hon 20 truong hoc doi tac.",
  },
  {
    year: "2018",
    title: "Nang Tam Chat Luong",
    desc: "Dat chung nhan quan ly an toan thuc pham ISO 22000 va mo rong dich vu tiec ngoai.",
  },
  {
    year: "2024",
    title: "Dan Dau Nganh",
    desc: "Phuc vu hon 15,000 suat an moi ngay voi doi ngu 700+ nhan vien chuyen nghiep.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Hanh Trinh Phat Trien
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground font-serif">
            Cot Moc Quan Trong
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <p className="text-3xl font-bold text-primary font-serif">{m.year}</p>
                  <h3 className="text-lg font-bold text-secondary-foreground mt-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">{m.desc}</p>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 ring-4 ring-secondary" />

                <div className="md:hidden pl-16">
                  <p className="text-3xl font-bold text-primary font-serif">{m.year}</p>
                  <h3 className="text-lg font-bold text-secondary-foreground mt-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">{m.desc}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
