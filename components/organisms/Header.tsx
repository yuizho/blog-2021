import React, { FC } from 'react';

const Header: FC = () => (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          J&apos;aime les ramens
        </span>
      </div>
    </nav>
  </>
);

export default Header;
