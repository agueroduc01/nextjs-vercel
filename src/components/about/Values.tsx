"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  { title: "An Toan", desc: "An toan ve sinh thuc pham la uu tien hang dau trong moi hoat dong cua chung toi." },
  { title: "Chat Luong", desc: "Cam ket mang den nhung bua an chat luong tu nguon nguyen lieu tuoi sach, uy tin." },
  { title: "Sang Tao", desc: "Luon doi moi thuc don va dich vu de dap ung nhu cau da dang cua khach hang." },
  { title: "Tan Tam", desc: "Moi khach hang deu la doi tac quan trong, chung toi phuc vu bang su tan tam va chuyen nghiep." },
];

export default function Values() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/quality-food.jpg"
              alt="Nguyen lieu tuoi sach"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Gia Tri Cot Loi
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif text-balance">
              Su Menh Va Tam Nhin
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
