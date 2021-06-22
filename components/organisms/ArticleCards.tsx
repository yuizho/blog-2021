import { FC } from 'react';
import ArticleCard, { Props as ArticleProps } from '../molecules/ArticleCard';

type Props = {
  articles: Array<ArticleProps>;
};

const ArticleCards: FC<Props> = ({ articles }: Props) => (
  <>
    {articles.map((article) => (
      <div className="mt-5">
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.title}
          url={article.url}
        />
      </div>
    ))}
  </>
);

export default ArticleCards;
