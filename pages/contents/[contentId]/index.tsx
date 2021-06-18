import { useRouter } from 'next/dist/client/router';
import React, { FC } from 'react';

const Content: FC = () => {
  const router = useRouter();

  return (
    <>
      <h1>Content!!!!! {router.query.contentId}</h1>
    </>
  );
};

export default Content;
