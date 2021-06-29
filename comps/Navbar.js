import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <h1>BigDream</h1>
        </div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/dream'>
          <a>Big Dream</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
