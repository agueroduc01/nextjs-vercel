"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Cau Chuyen Cua Chung Toi
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif text-balance">
              Tu Y Tuong Nho Den Doanh Nghiep Dan Dau
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Ra doi tu nam 2006, The Caterers khoi nghiep tu y tuong kinh doanh nho ve san xuat va giao tan noi banh mi sandwich dong goi san. Den nay, The Caterers da tro thanh doanh nghiep dan dau trong viec cung cap cac dich vu thuc pham da dang tren khap ca nuoc.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              La doanh nghiep doc lap, chuyen nghiep va sang tao, The Caterers chuyen cung cap dich vu can tin truong hoc, bep an cong nghiep, phan an van phong va tiec ngoai, voi muc tieu nang cao chat luong cuoc song cho khach hang.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Chung toi cam ket mang den nhung bua an chat luong, an toan va day du dinh duong, dong thoi luon doi moi de dap ung nhu cau ngay cang cao cua khach hang.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/kitchen-staff.jpg"
                alt="Doi ngu bep truong The Caterers"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg hidden lg:block">
              <p className="text-4xl font-bold font-serif">12+</p>
              <p className="text-sm font-semibold uppercase tracking-wider mt-1">Nam Kinh Nghiem</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
