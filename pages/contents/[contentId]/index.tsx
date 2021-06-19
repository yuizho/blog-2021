import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';
import Header from '../../../components/organisms/Header';

const Content: FC = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div> {router.query.contentId}</div>
    </>
  );
};

export default Content;
