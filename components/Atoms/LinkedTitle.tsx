import { FC } from 'react';
import Link from 'next/link';

type Props = {
  size: 'lg' | 'xl';
  href: string;
  text: string;
};

const LinkedTitle: FC<Props> = ({ size, href, text }: Props) => (
  <Link href={href}>
    <a
      className={`font-semibold text-${size} text-gray-700 tracking-tight hover:underline`}
    >
      {text}
    </a>
  </Link>
);

export default LinkedTitle;
