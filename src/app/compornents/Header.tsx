import LoginControl from "./LoginControl";
import React from "react";
import NextAuthProvider from "../providers/NextAuth";
import LoginControlv from "./LoginControlv";
import KeywordSearch from "./KeywordSearch";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" >
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div>
        <KeywordSearch />
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <NextAuthProvider>
            <LoginControlv />
          </NextAuthProvider>
        </div>
      </nav>
    </header>
  );
}
