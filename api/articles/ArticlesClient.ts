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

    if (!response.ok) {
      return {
        ok: response.ok,
        status: response.status,
        body: [],
      };
    }

    const current = response.body?.contents || [];
    ids = ids.concat(current.map((content) => content.id));

    const totalCount = response.body?.totalCount || 0;
    if (totalCount <= ids.length) {
      break;
    }
    offset += 1;
  }

  return {
    ok: true,
    status: 200,
    body: ids,
  };
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

    if (!response.ok) {
      return {
        ok: response.ok,
        status: response.status,
        body: [],
      };
    }
    const current = response.body?.contents || [];
    contents = contents.concat(current);

    const totalCount = response.body?.totalCount || 0;
    if (totalCount <= contents.length) {
      break;
    }
    offset += 1;
  }

  return {
    ok: true,
    status: 200,
    body: contents,
  };
};
