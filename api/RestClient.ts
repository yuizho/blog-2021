const createRequestHeaders = () => {
  const requestHeaders = new Headers();
  requestHeaders.set('X-API-KEY', process.env.API_KEY || '');
  return requestHeaders;
};

export const get = async <T>(url: string) => {
  return await fetch(url, {
    headers: createRequestHeaders(),
  })
    .then((res) => res.json())
    .then((json) => json as T);
};
