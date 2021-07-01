import cheerio from 'cheerio';
import hljs from 'highlight.js';
import React, { FC } from 'react';
import Container from '../molecules/Container';
import styles from './Article.module.css';
import 'highlight.js/styles/rainbow.css';

type Props = {
  title: string;
  body: string;
  publishedAt: Date;
  thumbnail: string;
  tags: Array<string>;
};

const Article: FC<Props> = ({
  title,
  body,
  publishedAt,
  thumbnail,
  tags,
}: Props) => {
  const highlight = (htmlBody: string) => {
    const $ = cheerio.load(htmlBody);
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    });
    return $.html();
  };

  return (
    <>
      <Container>
        <h1 className="text-gray-600 text-xl font-semibold text-l tracking-tight">
          {title}
        </h1>
        <div className="mt-2 text-sm  text-gray-600">
          {publishedAt.toLocaleString()}
        </div>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="mt-2 flex-shrink-0 pr-2 text-sm font-semibold text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        {thumbnail && (
          <img
            className="h-hull w-full object-cover my-4"
            src={thumbnail}
            alt="a thumbnail"
          />
        )}
        <hr className="my-5" />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: `${highlight(body)}`,
          }}
        />
      </Container>
    </>
  );
};

export default Article;
