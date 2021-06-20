import { FC } from 'react';
import Link from 'next/link';

export type Props = {
  id: number;
  title: string;
  url: string;
};

const Article: FC<Props> = ({ id, title, url }: Props) => (
    <li key={id}>
      <Link href={url}>{title}</Link>
    </li>
  );

export default Article;
