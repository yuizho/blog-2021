import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import Article from '../../../components/organisms/Article';
import Frame from '../../../components/templates/Frame';
import {
  Content,
  fetchArticleBy,
  fetchArticleIds,
} from '../../../api/articles/ArticlesClient';

type Props = {
  content: Content;
};

interface Params extends ParsedUrlQuery {
  articleId: string;
}

const ArticleDetails: FC<Props> = ({ content }: Props) => (
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
        publishedAt={content.publishedAt}
        thumbnail={content.thumbnail?.url || ''}
        tags={content.categories.map((category) => category.name)}
      />
    </Frame>
  </>
);

export const getStaticPaths = async () => {
  const ids = await fetchArticleIds();
  return {
    fallback: 'blocking',
    paths: ids.map((id) => ({
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
  const content = await fetchArticleBy(articleId);
  return {
    props: {
      content,
    },
    revalidate: 60,
  };
};

export default ArticleDetails;
