import React, { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => (
  <>
    <nav className="flex items-center  flex-wrap  px-2 py-6 md:px-6">
      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
        <Link href="/">
          <a className="font-semibold text-xl tracking-tight hover:underline">
            J&apos;aime les ramens
          </a>
        </Link>
      </div>
      <Link href="/about">
        <a className="text-gray-700  text-sm underline">about</a>
      </Link>
    </nav>
  </>
);

export default Header;
