import { FC } from 'react';
import Article, { Props as ArticleProps } from '../molecules/Article';

type Props = {
  articles: Array<ArticleProps>;
};

const Articles: FC<Props> = ({ articles }: Props) => (
    <>
      <ul>
        {articles.map((article) => (
          <Article id={article.id} title={article.title} url={article.url} />
        ))}
      </ul>
    </>
  );

export default Articles;
