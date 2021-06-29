import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/dist/client/router';
import Error from 'next/error';
import { Content, fetchArticles } from '../api/articles/ArticlesClient';
import ArticleCards from '../components/organisms/ArticleCards';
import Frame from '../components/templates/Frame';

interface Params extends ParsedUrlQuery {
  articleId: string;
}

type Props = {
  isOk: boolean;
  statusCode: number;
  contents: Array<Content>;
};

const Home: FC<Props> = ({ isOk, statusCode, contents }: Props) => {
  const router = useRouter();

  const extractByTag = (cs: Array<Content>, tag: string) =>
    tag
      ? cs.filter((c) =>
          c.categories
            .map((cate) => cate.name.toLowerCase())
            .includes(tag.toLowerCase()),
        )
      : contents;

  if (!isOk) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <>
      <Frame>
        <ArticleCards
          articles={extractByTag(contents, router.query.tag as string).map(
            (content) => ({
              id: content.id,
              title: content.title,
              url: `/articles/${content.id}`,
              thumbnail: content.thumbnail?.url || '',
              summary: content.summary || '',
              publishedAt: new Date(content.publishedAt),
              tags: content.categories.map((category) => category.name),
            }),
          )}
        />
      </Frame>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async () => {
  const res = await fetchArticles();
  return {
    props: {
      isOk: res.ok,
      statusCode: res.status,
      contents: res.body,
    },
    revalidate: 60,
  };
};

export default Home;
