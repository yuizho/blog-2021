import { FC } from 'react';
import Link from 'next/link';

export type Props = {
  id: string;
  title: string;
  url: string;
};

const ArticleCard: FC<Props> = ({ id, title, url }: Props) => (
  <li key={id}>
    <Link href={url}>{title}</Link>
  </li>
);

export default ArticleCard;
