import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkedTitle from '../Atoms/LinkedTitle';
import Tags from './Tags';

export type Props = {
  id: string;
  title: string;
  url: string;
  publishedAt: Date;
  summary: string;
  thumbnail: string;
  tags: Array<string>;
};

//  TODO: うまいことImageにしたいが崩れる
const ArticleCard: FC<Props> = ({
  id,
  title,
  url,
  publishedAt,
  summary,
  thumbnail,
  tags,
}: Props) => (
  <div key={id} className="border rounded-xl shadow-md overflow-hidden w-full">
    <div className="md:flex">
      <div className="cursor-pointer md:flex-shrink-0">
        {thumbnail && (
          <Link href={url}>
            <div className="relative h-60 w-full md:w-60">
              <Image
                layout="fill"
                objectFit="cover"
                src={thumbnail}
                alt="a thumbnail"
              />
            </div>
          </Link>
        )}
      </div>
      <div className="p-6">
        <LinkedTitle href={url} size="lg" text={title} />
        <div className="mt-1 text-sm  text-gray-600">
          {publishedAt.toLocaleString()}
        </div>
        <p className="mt-2 tracking-wide text-gray-600">{summary}</p>
        <div className="mt-2">
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCard;
