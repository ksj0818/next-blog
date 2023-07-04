import Header from "@/components/common/Header";
import "./globals.css";
import { Lora } from "next/font/google";
import Footer from "@/components/common/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "포스트 블로그",
  description: "Next v13 버전 연습 ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lora.className}>
      <body className="flex flex-col w-full max-w-4xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
