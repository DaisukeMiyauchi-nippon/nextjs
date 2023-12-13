"use client";

import { signIn, signOut } from "next-auth/react";
import LoginControl from "./LoginControl";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
} from "@heroicons/react/24/outline";
import React from "react";
import NextAuthProvider from "./providers/NextAuth";



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
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
          </Popover.Group>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NextAuthProvider><LoginControl /></NextAuthProvider>
          </div>
        </nav>
      </header>
  );
}
