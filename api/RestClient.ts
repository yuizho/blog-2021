const createRequestHeaders = () => {
  const requestHeaders = new Headers();
  requestHeaders.set('X-API-KEY', process.env.API_KEY || '');
  return requestHeaders;
};

export type RestResult<T> = {
  ok: boolean;
  status: number;
  body?: T;
};

export const get = async <T>(url: string) => {
  const res = await fetch(url, {
    headers: createRequestHeaders(),
  });

  if (!res.ok) {
    return {
      ok: res.ok,
      status: res.status,
    };
  }

  const json = await res.json();
  return {
    ok: res.ok,
    status: res.status,
    body: json as T,
  };
};
