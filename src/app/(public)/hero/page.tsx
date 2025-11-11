'use client';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedList() {
  return (
    <>
      <motion.ul
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {[1, 2, 3].map((n) => (
          <motion.li
            key={n}
            variants={fadeUp}
            className="p-2 bg-gray-100 rounded-md mb-2"
          >
            Item {n}
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-lg"
      >
        Hover me
      </motion.button>
    </>
  );
}
