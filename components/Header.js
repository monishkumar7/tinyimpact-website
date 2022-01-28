import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="flex py-8 px-4">
      <Link href="/">
        <h1 className="text-3xl hover:cursor-pointer">
          <span className="text-white font-thin mr-0.5">tiny</span>
          <span className="text-yellow-400 font-extrabold">impact</span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
