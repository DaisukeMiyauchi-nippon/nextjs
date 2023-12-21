import LoginControl from "./LoginControl";
import React from "react";
import NextAuthProvider from "./providers/NextAuth";
import LoginControlv from "./LoginControlv";

export default function Header() {
  return (
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1>会社ロゴ</h1>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/aboutus"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              プロジェクトZとは
            </a>
            <a
              href="/aboutus"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              パートナー様へ
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              よくある質問
            </a>
            <a
              href="/inquiry"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              お問い合わせ
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NextAuthProvider><LoginControlv /></NextAuthProvider>
          </div>
        </nav>
      </header>
  );
}
