import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "所得税計算ツール｜収入と税率から税額を自動計算",
  description:
    "収入金額と税率を入力するだけで、おおよその所得税額と税引き後金額を簡単に計算できる無料ツールです。",
  keywords: [
    "所得税 計算",
    "税金 計算",
    "税額 計算",
    "収入 税金",
    "税引き後 計算",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja"><head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
    crossOrigin="anonymous"
  />
</head>

      <body>{children}</body>
    </html>
  );
}