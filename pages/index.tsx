import Head from 'next/head';
import React, { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>
      <h1>Hi!!!!!</h1>
      <Link href="/contents/1">content1</Link>
      <br />
      <Link href="/contents/2">content2</Link>
    </>
  );
};

export default Home;
