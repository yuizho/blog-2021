import { FC } from 'react';
import Link from 'next/link';

export type Props = {
  id: string;
  title: string;
  url: string;
};

//  TODO: うまいことImageにしたいが崩れる
const ArticleCard: FC<Props> = ({ id, title, url }: Props) => (
  <div
    key={id}
    className="border max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-60 w-full object-cover md:w-60"
          src="https://yuizho.github.io/blog/posts/20200115_hotel.webp"
          alt="an article"
        />
      </div>
      <div className="p-6">
        <Link href={url}>
          <a className="text-lg font-semibold text-gray-700 hover:underline">
            {title}
          </a>
        </Link>
        <p className="mt-2 text-sm  text-gray-600">2021-06-02</p>
        <p className="mt-2 tracking-wide text-gray-500">
          これはテストの文章だから特に内容はないんだけど、こんな感じで文章のサマリーをのせたいんだよね。
        </p>
      </div>
    </div>
  </div>
);

export default ArticleCard;
