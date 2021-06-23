import { FC } from 'react';
import Link from 'next/link';

export type Props = {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
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
      <div className="md:flex-shrink-0">
        {thumbnail && (
          <img
            className="h-60 w-full object-cover md:w-60"
            src={thumbnail}
            alt="a thumbnail"
          />
        )}
      </div>
      <div className="p-6">
        <Link href={url}>
          <a className="text-lg font-semibold text-gray-700 hover:underline">
            {title}
          </a>
        </Link>
        <div className="mt-1 text-sm  text-gray-600">{publishedAt}</div>
        <p className="mt-2 tracking-wide text-gray-600">{summary}</p>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <span className="mt-2 flex-shrink-0 pr-2 text-sm font-semibold text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCard;
