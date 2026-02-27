"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-serif text-balance">
            Ban Quan Tam Den Dich Vu Cua Chung Toi?
          </h2>
          <p className="mt-6 text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Lien he voi chung toi de duoc tu van chi tiet ve cac giai phap am thuc phu hop nhat cho nhu cau cua ban.
          </p>
          <Link
            href="/lien-he"
            className="inline-block mt-10 bg-background text-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-background/90 transition-colors rounded"
          >
            Lien He Tu Van
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
