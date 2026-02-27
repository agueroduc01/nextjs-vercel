"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-catering.jpg"
        alt="The Caterers - Dich vu am thuc chuyen nghiep"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-4"
        >
          Tu nam 2006
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight font-serif text-balance"
        >
          Dich Vu Am Thuc Chuyen Nghiep
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-background/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Nang cao chat luong cuoc song thong qua nhung bua an ngon, an toan va day du dinh duong.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="/gioi-thieu"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors rounded"
          >
            Tim Hieu Them
          </Link>
          <Link
            href="/lien-he"
            className="border-2 border-background text-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors rounded"
          >
            Lien He Ngay
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
