import cheerio from 'cheerio';
import hljs from 'highlight.js';
import React, { FC } from 'react';
import Image from 'next/image';
import Container from '../molecules/Container';
import styles from './Article.module.css';
import 'highlight.js/styles/rainbow.css';
import Tags from '../molecules/Tags';

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
        <h1 className="text-gray-600 text-lg font-semibold text-l tracking-tight">
          {title}
        </h1>
        <div className="mt-2 text-sm  text-gray-600">
          {publishedAt.toLocaleString()}
        </div>
        <div className="mt-2">
          <Tags tags={tags} />
        </div>
        {thumbnail && (
          <div className="my-4">
            <Image
              width="800"
              height="600"
              objectFit="cover"
              src={thumbnail}
              alt="a thumbnail"
            />
          </div>
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
