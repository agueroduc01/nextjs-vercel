import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-serif">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">THE CATERERS</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Ra doi tu nam 2006, The Caterers la doanh nghiep dan dau trong viec cung cap cac dich vu thuc pham da dang tren khap ca nuoc.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Lien Ket</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Trang Chu
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Gioi Thieu
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Dich Vu
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-sm text-background/70 hover:text-primary transition-colors">
                  Lien He
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Lien He</h3>
            <ul className="flex flex-col gap-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>17 Duong so 1, Khu pho 3, P. An Phu, TP. Thu Duc, TP. Ho Chi Minh</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(028) 3740 7170</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@thecaterers.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} The Caterers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
