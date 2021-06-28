import { FC } from 'react';
import Link from 'next/link';

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
  <div
    key={id}
    className="border max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div className="md:flex">
      <div className="cursor-pointer md:flex-shrink-0">
        {thumbnail && (
          <Link href={url}>
            <img
              className="h-60 w-full object-cover md:w-60"
              src={thumbnail}
              alt="a thumbnail"
            />
          </Link>
        )}
      </div>
      <div className="p-6">
        <Link href={url}>
          <a className="text-lg font-semibold text-gray-700 hover:underline">
            {title}
          </a>
        </Link>
        <div className="mt-1 text-sm  text-gray-600">
          {publishedAt.toLocaleString()}
        </div>
        <p className="mt-2 tracking-wide text-gray-600">{summary}</p>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <Link key={tag} href={`/?tag=${tag}`}>
              <a className="mt-2 flex-shrink-0 pr-2 text-sm font-semibold text-gray-700 hover:underline">
                {tag}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCard;
