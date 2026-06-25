"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("10");

  const incomeNum = Number(income) || 0;
  const taxRateNum = Number(taxRate) || 0;

  const taxAmount = Math.floor(incomeNum * (taxRateNum / 100));
  const afterTax = incomeNum - taxAmount;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-3 text-center">
          所得税計算ツール
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          収入金額と税率を入力すると、おおよその税額を計算できます。
        </p>

        <div className="space-y-4">
          <div>
            <label>収入金額（円）</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：300000"
            />
          </div>

          <div>
            <label>税率（%）</label>
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              className="w-full border p-2 rounded mt-1"
            />
          </div>
        </div>

        <div className="mt-8 space-y-2 text-lg border-t pt-6">
          <p>税額: ¥{taxAmount.toLocaleString()}</p>

          <p className="font-bold text-green-600 text-xl">
            税引き後金額: ¥{afterTax.toLocaleString()}
          </p>
        </div>
      </div>

      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">他の便利ツール</h2>

        <ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
          <li><a href="https://wage-calc-tawny.vercel.app/">時給計算ツール</a></li>
          <li><a href="https://overtime-calc.vercel.app/">残業代計算ツール</a></li>
          <li><a href="https://take-home-pay-calc.vercel.app/">手取り計算ツール</a></li>
          <li><a href="https://annual-income-calc.vercel.app/">年収計算ツール</a></li>
          <li><a href="https://bonus-calc-six.vercel.app/">ボーナス手取り計算ツール</a></li>
          <li><a href="https://monthly-salary-calc.vercel.app/">月給計算ツール</a></li>
          <li><a href="https://daily-wage-calc.vercel.app/">日給計算ツール</a></li>
        </ul>
      </section>

      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">所得税の考え方</h2>

        <p className="text-gray-700 leading-relaxed">
          所得税は収入に対して一定の税率をかけて計算されます。
          実際には累進課税制度や控除などがありますが、
          このツールではシンプルに税率を指定して概算税額を確認できます。
          給与収入や副業収入の目安確認に利用できます。
        </p>
      </section>

      <section className="mt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-3">このサイトについて</h2>

        <p className="text-gray-700 leading-relaxed">
          ANT FARMでは、仕事や生活に役立つ無料Webツールを公開しています。
          この所得税計算ツールでは、収入と税率からおおよその税額を簡単に確認できます。
          スマホからも無料で利用できます。
        </p>
      </section>

      <footer className="mt-10 pt-6 text-sm text-gray-500 text-center">
        <p>© ANT FARM</p>
        <Link href="/privacy-policy" className="underline">
          プライバシーポリシー
        </Link>
      </footer>
    </main>
  );
}