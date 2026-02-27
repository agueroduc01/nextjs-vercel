"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    image: "/images/school-canteen.jpg",
    title: "Canteen Truong Hoc",
    desc: "The Caterers cung cap dich vu can tin cho hon 36 truong hoc tren toan quoc. Chung toi thiet ke thuc don can bang dinh duong, phu hop voi tung do tuoi, dam bao an toan ve sinh thuc pham va mang den trai nghiem bua an vui ve cho cac em hoc sinh.",
    features: [
      "Thuc don dinh duong can bang theo tung do tuoi",
      "Tieu chuan an toan ve sinh ISO 22000",
      "Doi ngu phuc vu chuyen nghiep, than thien",
      "Hoat dong ngoai khoa ve dinh duong cho hoc sinh",
    ],
  },
  {
    image: "/images/industrial-meals.jpg",
    title: "Suat An Cong Nghiep",
    desc: "Phuc vu hang ngan suat an moi ngay cho cac khu cong nghiep, nha may voi chat luong dong deu. Chung toi hieu rang bua an ngon va du chat la dong luc giup nguoi lao dong lam viec hieu qua hon.",
    features: [
      "15,000+ suat an moi ngay",
      "Thuc don da dang, thay doi hang tuan",
      "Giao tan noi dung gio",
      "Gia ca canh tranh, chat luong dam bao",
    ],
  },
  {
    image: "/images/event-catering.jpg",
    title: "Dich Vu Tiec Ngoai",
    desc: "Tu tiec cocktail sang trong den buffet quy mo lon, chung toi mang den trai nghiem am thuc dang cap cho moi su kien. Hon 640 su kien duoc to chuc moi nam la minh chung cho su tin tuong cua khach hang.",
    features: [
      "640+ tiec su kien moi nam",
      "Cocktail, buffet, set menu linh hoat",
      "Doi ngu phuc vu su kien chuyen nghiep",
      "Trang tri va setup theo yeu cau",
    ],
  },
  {
    image: "/images/office-meals.jpg",
    title: "Phan An Van Phong",
    desc: "Giai phap bua trua tien loi va chat luong cho doanh nghiep. Moi phan an deu duoc chuan bi tu nguyen lieu tuoi sach, dong goi can than va giao tan noi moi ngay.",
    features: [
      "Thuc don thay doi hang ngay",
      "Dong goi an toan, tien loi",
      "Giao hang dung gio cam ket",
      "Ho tro dat hang linh hoat",
    ],
  },
];

export default function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                {s.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
