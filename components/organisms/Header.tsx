import React, { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => (
  <>
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
        <Link href="/">
          <a className="font-semibold text-xl tracking-tight hover:underline">
            J&apos;aime les ramens
          </a>
        </Link>
      </div>
    </nav>
  </>
);

export default Header;
