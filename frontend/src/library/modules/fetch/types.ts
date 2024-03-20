export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

export type FetchHeaderValue = string | string[] | number | boolean | null;

export interface FetchHeaders {
  [key: string]: FetchHeaderValue;
}

export type FetchResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

export type FetchResponseEncoding =
  | 'ascii'
  | 'ASCII'
  | 'ansi'
  | 'ANSI'
  | 'binary'
  | 'BINARY'
  | 'base64'
  | 'BASE64'
  | 'base64url'
  | 'BASE64URL'
  | 'hex'
  | 'HEX'
  | 'latin1'
  | 'LATIN1'
  | 'ucs-2'
  | 'UCS-2'
  | 'ucs2'
  | 'UCS2'
  | 'utf-8'
  | 'UTF-8'
  | 'utf8'
  | 'UTF8'
  | 'utf16le'
  | 'UTF16LE';

export type FetchConfig<D = any> = {
  url: string;
  method: Method | string;
  baseURL?: string;
  headers?: FetchHeaders;
  params?: any;
  data?: D;
  timeout?: number;
  responseType?: FetchResponseType;
  responseEncoding?: FetchResponseEncoding | string;
};

export type FetchResponse<D = any> = {
  data: D;
  status: number;
  statusText: string;
  headers: FetchHeaders;
};

export type FetchFunction = <T>(a: any) => Promise<FetchResponse<T>>;

export type FetchError<D = any> = {
  message?: string;
  code?: string;
  response?: FetchResponse<D>;
};

export type ErrorHandlerFunction = (response: FetchError) => void;

export type FetchFactoryConfig = {
  errorHandler?: ErrorHandlerFunction;
};
