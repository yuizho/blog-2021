import Head from 'next/head';
import React, { FC } from 'react';
import ArticleCards from '../components/organisms/ArticleCards';
import Frame from '../components/templates/Frame';

type Props = {
  contents: Array<Content>;
};

type Thumbnail = {
  url: string;
  height: number;
  width: number;
};

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

type Content = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  summary?: string;
  thumbnail?: Thumbnail;
  categories: Array<Category>;
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

    <Frame>
      <ArticleCards
        articles={contents.map((content) => ({
          id: content.id,
          title: content.title,
          url: `/articles/${content.id}`,
          thumbnail: content.thumbnail?.url || '',
          summary: content.summary || '',
          publishedAt: content.publishedAt,
        }))}
      />
    </Frame>
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
    'https://yuizho.microcms.io/api/v1/articles?fields=id%2Ctitle%2CcreatedAt%2CupdatedAt%2CpublishedAt%2CrevisedAt%2Csummary%2Cthumbnail',
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
