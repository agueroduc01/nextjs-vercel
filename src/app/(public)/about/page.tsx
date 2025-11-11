'use client'; // 👈 BẮT BUỘC trong Next.js App Router (animation chạy phía client)

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // trạng thái ban đầu
      animate={{ opacity: 1, y: 0 }} // animation đến trạng thái này
      transition={{ duration: 0.6 }} // thời gian chuyển động
      className="p-6 bg-white rounded-2xl shadow-md"
    >
      <h1 className="text-xl font-bold">Hello Framer Motion 👋</h1>
      <p>Fade-in animation running inside Next.js!</p>
    </motion.div>
  );
}
