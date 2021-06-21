import Head from 'next/head';
import React, { FC } from 'react';
import Header from '../components/organisms/Header';
import ArticleCards from '../components/organisms/ArticleCards';

type Props = {
  contents: Array<Content>;
};

type Content = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

type ApiResult = {
  contents: Array<Content>;
  totalCount: number;
  offset: number;
  limit: number;
};

const Home: FC<Props> = ({ contents }: Props) => (
  <>
    <Head>
      <title>blog</title>
    </Head>

    <Header />

    <ArticleCards
      articles={contents.map((content) => ({
        id: content.id,
        title: content.title,
        url: `/articles/${content.id}`,
      }))}
    />
  </>
);

export async function getStaticProps() {
  const requestHeaders = new Headers();
  requestHeaders.set('X-API-KEY', process.env.API_KEY || '');
  const key = {
    headers: requestHeaders,
  };

  // TODO: Error handling
  const result = await fetch(
    'https://yuizho.microcms.io/api/v1/articles?fields=id%2Ctitle%2CcreatedAt%2CupdatedAt%2CpublishedAt%2CrevisedAt',
    key,
  )
    .then((res) => res.json())
    .then((json) => json as ApiResult);

  return {
    props: {
      contents: result.contents,
    },
  };
}

export default Home;
