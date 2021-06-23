import React, { FC } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

type Props = {
  children: React.ReactNode;
};

const Frame: FC<Props> = ({ children }: Props) => (
  <div className="flex flex-col h-screen justify-between">
    <Header />
    <div className="mb-auto">{children}</div>
    <Footer />
  </div>
);

export default Frame;
