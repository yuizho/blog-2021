import { FC } from 'react';
import styles from './Article.module.css';

type Props = {
  title: string;
  body: string;
};

const Article: FC<Props> = ({ title, body }: Props) => (
    <>
      <div className={styles.container}>
        <h1 className="text-gray-700 text-xl  font-semibold text-l tracking-tight">
          {title}
        </h1>
        <div className="mt-2 text-sm  text-gray-600">2021-06-02</div>
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
