import { FC } from 'react';
import ArticleCard, { Props as ArticleProps } from '../molecules/ArticleCard';

type Props = {
  articles: Array<ArticleProps>;
};

const ArticleCards: FC<Props> = ({ articles }: Props) => (
  <>
    <ul>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.title}
          url={article.url}
        />
      ))}
    </ul>
  </>
);

export default ArticleCards;
