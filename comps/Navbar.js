import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <Image src='/bigdream.png' alt='bigdream' width={120} height={40} />
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
