import { FC } from 'react';
import Link from 'next/link';

type Props = {
  size: 'sm' | 'md';
  href: string;
  text: string;
};

const LinkedText: FC<Props> = ({ size, href, text }: Props) => (
  <Link href={href}>
    <a className={`text-gray-700 text-${size} underline`}>{text}</a>
  </Link>
);

export default LinkedText;
