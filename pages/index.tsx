import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { Content, fetchArticles } from '../api/articles/ArticlesClient';
import ArticleCards from '../components/organisms/ArticleCards';
import Frame from '../components/templates/Frame';

interface Params extends ParsedUrlQuery {
  articleId: string;
}

type Props = {
  contents: Array<Content>;
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
          tags: content.categories.map((category) => category.name),
        }))}
      />
    </Frame>
  </>
);

export const getStaticProps: GetStaticProps<Props, Params> = async () => {
  const contents = await fetchArticles();
  return {
    props: {
      contents,
    },
  };
};

export default Home;
