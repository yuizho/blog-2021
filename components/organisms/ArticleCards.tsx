import { FC } from 'react';
import ArticleCard, { Props as ArticleProps } from '../molecules/ArticleCard';

type Props = {
  articles: Array<ArticleProps>;
};

const ArticleCards: FC<Props> = ({ articles }: Props) => (
  <>
    {articles.map((article) => (
      <div key={article.id} className="mb-6">
        <ArticleCard
          id={article.id}
          title={article.title}
          url={article.url}
          summary={article.summary}
          thumbnail={article.thumbnail}
          publishedAt={article.publishedAt}
          tags={article.tags}
        />
      </div>
    ))}
  </>
);

export default ArticleCards;
