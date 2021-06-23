import { FC } from 'react';
import styles from './Article.module.css';

type Props = {
  title: string;
  body: string;
  publishedAt: string;
  thumbnail: string;
};

const Article: FC<Props> = ({ title, body, publishedAt, thumbnail }: Props) => (
  <>
    <div className={styles.container}>
      <h1 className="text-gray-600 text-xl  font-semibold text-l tracking-tight">
        {title}
      </h1>
      <div className="mt-2 text-sm  text-gray-600">{publishedAt}</div>
      {thumbnail && (
        <img
          className="h-hull w-full object-cover my-5 rounded-xl"
          src={thumbnail}
          alt="a thumbnail"
        />
      )}
      <hr className="my-5" />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${body}`,
        }}
      />
    </div>
  </>
);

export default Article;
