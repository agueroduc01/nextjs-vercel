"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Tuyen Dung
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-background font-serif text-balance">
            Gia Nhap Doi Ngu The Caterers
          </h2>
          <p className="mt-6 text-background/70 leading-relaxed max-w-2xl mx-auto">
            Chung toi hoan toan thau hieu rang nguon nhan su chu luc la yeu to quan trong cho su phat trien cua cong ty. Tai The Caterers, chien luoc tuyen dung cua chung toi la don nhan nhung ca nhan co thai do dung muc, mong muon phat trien ban than va xay dung su nghiep lau dai.
          </p>
          <Link
            href="/lien-he"
            className="inline-block mt-10 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors rounded"
          >
            Lien He Ngay
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
