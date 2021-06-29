import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import Error from 'next/error';
import Article from '../../../components/organisms/Article';
import Frame from '../../../components/templates/Frame';
import {
  Content,
  fetchArticleBy,
  fetchArticleIds,
} from '../../../api/articles/ArticlesClient';

type Props = {
  isOk: boolean;
  statusCode: number;
  content: Content;
};

interface Params extends ParsedUrlQuery {
  articleId: string;
}

const ArticleDetails: FC<Props> = ({ isOk, statusCode, content }: Props) => {
  if (!isOk) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <>
      <Head>
        <meta name="og:title" content={content.title} />
        {content.thumbnail && (
          <meta name="og:image" content={content.thumbnail.url} />
        )}
        <meta name="og:description" content={content.summary || ''} />
        <meta name="og:type" content="article" />
      </Head>

      <Frame>
        <Article
          title={content.title}
          body={content.body}
          publishedAt={new Date(content.publishedAt)}
          thumbnail={content.thumbnail?.url || ''}
          tags={content.categories.map((category) => category.name)}
        />
      </Frame>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetchArticleIds();
  return {
    fallback: 'blocking',
    paths: res.body.map((id) => ({
      params: {
        articleId: id,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const articleId = context.params?.articleId || '';
  const res = await fetchArticleBy(articleId);

  return {
    props: {
      isOk: res.ok,
      statusCode: res.status,
      content: res.body || {
        id: '',
        title: '',
        body: '',
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        revisedAt: '',
        categories: [],
      },
    },
    revalidate: 60,
  };
};

export default ArticleDetails;
