"use client";

import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Dia Chi",
    lines: ["17 Duong so 1, Khu pho 3,", "P. An Phu, TP. Thu Duc,", "TP. Ho Chi Minh"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Dien Thoai",
    lines: ["(028) 3740 7170", "(028) 3740 7171"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    lines: ["info@thecaterers.vn", "sales@thecaterers.vn"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Gio Lam Viec",
    lines: ["Thu 2 - Thu 6: 8:00 - 17:30", "Thu 7: 8:00 - 12:00"],
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
        Thong Tin
      </p>
      <h2 className="text-3xl font-bold text-foreground font-serif mb-8">
        Thong Tin Lien He
      </h2>

      <div className="flex flex-col gap-8">
        {contactDetails.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-secondary rounded-lg">
        <h3 className="text-lg font-bold text-secondary-foreground font-serif mb-3">
          Ban Can Tu Van Nhanh?
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Goi cho chung toi theo so (028) 3740 7170 hoac gui email den info@thecaterers.vn. Doi ngu tu van cua chung toi se phan hoi trong vong 24 gio lam viec.
        </p>
      </div>
    </motion.div>
  );
}
