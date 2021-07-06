import React, { FC } from 'react';
import LinkedTitle from '../Atoms/LinkedTitle';
import LinkedText from '../Atoms/LinkedText';

const Header: FC = () => (
  <>
    <nav className="container flex items-center flex-wrap px-2 py-6 md:max-w-3xl max-w-xl">
      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
        <LinkedTitle href="/" size="xl" text="J'aime les ramens" />
      </div>
      <LinkedText href="/about" size="md" text="about" />
    </nav>
  </>
);

export default Header;
