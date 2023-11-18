import Link from "next/link";
import React from "react";

const Header = async () => {
  return (
    <header>
      <h1>
        <Link href="/">ProjectZ Logo</Link>
      </h1>
    </header>
  );
};

export default Header;
