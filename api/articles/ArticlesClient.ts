import content from '*.png';
import { get } from '../RestClient';

export type Thumbnail = {
  url: string;
  height: number;
  width: number;
};

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Content = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  summary?: string;
  thumbnail?: Thumbnail;
  categories: Array<Category>;
};

type ArticlesResponse = {
  contents: Array<Content>;
  totalCount: number;
  offset: number;
  limit: number;
};

export const fetchArticleIds = async () => {
  const limit = 100;
  let offset = 0;
  let ids: Array<string> = [];

  while (true) {
    const response = await get<{
      contents: Array<{ id: string }>;
      totalCount: number;
      offset: number;
      limit: number;
    }>(
      `https://yuizho.microcms.io/api/v1/articles?limit=${limit}&offset=${offset}&fields=id`,
    );

    ids = ids.concat(response.contents.map((content) => content.id));
    if (response.totalCount <= ids.length) {
      break;
    }
    offset += 1;
  }

  return ids;
};

export const fetchArticleBy = async (articleId: string) => {
  return await get<Content>(
    `https://yuizho.microcms.io/api/v1/articles/${articleId}`,
  );
};

export const fetchArticles = async () => {
  // TODO: paging
  const limit = 100;
  let offset = 0;
  let contents: Array<Content> = [];

  while (true) {
    const response = await get<ArticlesResponse>(
      `https://yuizho.microcms.io/api/v1/articles?limit=${limit}&offset=${offset}&fields=id%2Ctitle%2CcreatedAt%2CupdatedAt%2CpublishedAt%2CrevisedAt%2Csummary%2Cthumbnail%2Ccategories`,
    );

    contents = contents.concat(response.contents);
    if (response.totalCount <= contents.length) {
      break;
    }
    offset += 1;
  }

  return contents;
};
