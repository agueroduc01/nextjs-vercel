"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Doi ngu The Caterers"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Ve Chung Toi
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground font-serif text-balance">
              The Caterers - Dan Dau Trong Dich Vu Thuc Pham
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Ra doi tu nam 2006, The Caterers khoi nghiep tu y tuong kinh doanh nho ve san xuat va giao tan noi banh mi sandwich dong goi san. Den nay, The Caterers da tro thanh doanh nghiep dan dau trong viec cung cap cac dich vu thuc pham da dang tren khap ca nuoc.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              La doanh nghiep doc lap, chuyen nghiep va sang tao, The Caterers chuyen cung cap dich vu can tin truong hoc, bep an cong nghiep, phan an van phong va tiec ngoai, voi muc tieu nang cao chat luong cuoc song cho khach hang.
            </p>
            <Link
              href="/gioi-thieu"
              className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors rounded"
            >
              Tim Hieu Them
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
