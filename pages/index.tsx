import Head from 'next/head';
import React, { FC } from 'react';
import Link from 'next/link';
import Header from '../components/organisms/Header';

const Home: FC = () => (
  <>
    <Head>
      <title>blog</title>
    </Head>
    <Header />
    <Link href="/contents/1">content1</Link>
    <br />
    <Link href="/contents/2">content2</Link>
  </>
);

export default Home;
