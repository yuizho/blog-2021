import React, { FC } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

type Props = {
  children: React.ReactNode;
};

const Frame: FC<Props> = ({ children }: Props) => (
  <div className="flex flex-col  h-screen justify-between">
    <div className="flex justify-center mb-6">
      <Header />
    </div>
    <div className="flex justify-center mb-auto">{children}</div>
    <div className="mt-6">
      <Footer />
    </div>
  </div>
);

export default Frame;
