import content from '*.png';

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

const createRequestHeaders = () => {
  const requestHeaders = new Headers();
  requestHeaders.set('X-API-KEY', process.env.API_KEY || '');
  return requestHeaders;
};

export const fetchArticleIds = async () => {
  const limit = 100;
  let offset = 0;
  let ids: Array<string> = [];

  while (true) {
    // TODO: Error handling
    const response = await fetch(
      `https://yuizho.microcms.io/api/v1/articles?limit=${limit}&offset=${offset}&fields=id`,
      {
        headers: createRequestHeaders(),
      },
    )
      .then((res) => res.json())
      .then(
        (json) =>
          json as {
            contents: Array<{ id: string }>;
            totalCount: number;
            offset: number;
            limit: number;
          },
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
  // TODO: Error handling
  const content = await fetch(
    `https://yuizho.microcms.io/api/v1/articles/${articleId}`,
    {
      headers: createRequestHeaders(),
    },
  )
    .then((res) => res.json())
    .then((json) => json as Content);

  return content;
};

export const fetchArticles = async () => {
  // TODO: paging
  const limit = 100;
  let offset = 0;
  let contents: Array<Content> = [];

  while (true) {
    // TODO: Error handling
    const response = await fetch(
      `https://yuizho.microcms.io/api/v1/articles?limit=${limit}&offset=${offset}&fields=id%2Ctitle%2CcreatedAt%2CupdatedAt%2CpublishedAt%2CrevisedAt%2Csummary%2Cthumbnail`,
      {
        headers: createRequestHeaders(),
      },
    )
      .then((res) => res.json())
      .then((json) => json as ArticlesResponse);

    contents = contents.concat(response.contents);
    if (response.totalCount <= contents.length) {
      break;
    }
    offset += 1;
  }

  return contents;
};
