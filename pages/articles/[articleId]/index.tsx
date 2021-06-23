import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import Article from '../../../components/organisms/Article';
import Header from '../../../components/organisms/Header';

type Props = {
  content: Content;
};

interface Params extends ParsedUrlQuery {
  articleId: string;
}

type Content = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

const ArticleDetails: FC<Props> = ({ content }: Props) => (
    <>
      <Header />
      <Article title={content.title} body={content.body} />
    </>
  );

export const getStaticPaths = async () => {
  const requestHeaders = new Headers();
  requestHeaders.set('X-API-KEY', process.env.API_KEY || '');
  const key = {
    headers: requestHeaders,
  };

  // TODO: Error handling
  const result = await fetch(
    'https://yuizho.microcms.io/api/v1/articles?fields=id',
    key,
  )
    .then((res) => res.json())
    .then(
      (json) =>
        json as {
          contents: Array<{ id: string }>;
          totalCount: number;
          offset: number;
          limit: number;
        },
    );

  return {
    fallback: false, // TODO: falseのままだとダメそう
    paths: result.contents.map((content) => ({
      params: {
        articleId: content.id,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const articleId = context.params?.articleId || '';

  const requestHeaders = new Headers();
  requestHeaders.set('X-API-KEY', process.env.API_KEY || '');
  const key = {
    headers: requestHeaders,
  };

  // TODO: Error handling
  const result = await fetch(
    `https://yuizho.microcms.io/api/v1/articles/${articleId}`,
    key,
  )
    .then((res) => res.json())
    .then((json) => json as Content);

  return {
    props: {
      content: result,
    },
  };
};

export default ArticleDetails;
