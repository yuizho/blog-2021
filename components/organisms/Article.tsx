import React, { FC } from 'react';
import Container from '../molecules/Container';
import styles from './Article.module.css';

type Props = {
  title: string;
  body: string;
  publishedAt: string;
  thumbnail: string;
  tags: Array<string>;
};

const Article: FC<Props> = ({
  title,
  body,
  publishedAt,
  thumbnail,
  tags,
}: Props) => (
  <>
    <Container>
      <h1 className="text-gray-600 text-xl  font-semibold text-l tracking-tight">
        {title}
      </h1>
      <div className="mt-2 text-sm  text-gray-600">{publishedAt}</div>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <span className="mt-2 flex-shrink-0 pr-2 text-sm font-semibold text-gray-600">
            {tag}
          </span>
        ))}
      </div>
      {thumbnail && (
        <img
          className="h-hull w-full object-cover my-4 rounded-xl"
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
    </Container>
  </>
);

export default Article;
