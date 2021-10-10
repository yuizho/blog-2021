import { FC } from 'react';
import Link from 'next/link';

type Props = {
  tag: string;
};

const Tag: FC<Props> = ({ tag }: Props) => (
  <Link href={`/?tag=${tag}`}>
    <a className="tag flex-shrink-0 pr-2 text-sm font-semibold text-gray-700 hover:underline">
      {tag}
    </a>
  </Link>
);

export default Tag;
