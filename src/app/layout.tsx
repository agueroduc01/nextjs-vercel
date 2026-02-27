import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Caterers - Dịch vụ ẩm thực chuyên nghiệp",
  description:
    "The Caterers - Doanh nghiệp hàng đầu cung cấp dịch vụ thực phẩm đa dạng: căn tin trường học, bếp ăn công nghiệp, phần ăn văn phòng và tiệc ngoài trên khắp cả nước.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
