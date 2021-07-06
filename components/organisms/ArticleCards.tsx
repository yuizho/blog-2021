import { FC } from 'react';
import ArticleCard, { Props as ArticleProps } from '../molecules/ArticleCard';

type Props = {
  articles: Array<ArticleProps>;
};

const ArticleCards: FC<Props> = ({ articles }: Props) => (
  <div className="flex flex-col space-y-6 md:max-w-3xl w-full max-w-lg">
    {articles.map((article) => (
      <ArticleCard
        key={article.id}
        id={article.id}
        title={article.title}
        url={article.url}
        summary={article.summary}
        thumbnail={article.thumbnail}
        publishedAt={article.publishedAt}
        tags={article.tags}
      />
    ))}
  </div>
);

export default ArticleCards;
