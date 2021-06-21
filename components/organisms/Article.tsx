import { FC } from 'react';

type Props = {
  title: string;
  body: string;
};

const Article: FC<Props> = ({ title, body }: Props) => (
    <>
      <h1 className="font-semibold text-l tracking-tight">{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${body}`,
        }}
      />
    </>
  );

export default Article;
