import axios, { AxiosHeaders, type AxiosInstance } from 'axios';

import { authState } from '@/library/modules/authorization/state';
import type {
  ErrorHandlerFunction,
  FetchConfig,
  FetchError,
  FetchFactoryConfig,
  FetchHeaders,
  FetchResponse,
} from '@/library/modules/fetch/types';
import { reactive, readonly } from 'vue';
import { loader } from '@/library/modules/loader/loader';
import router from '@/library/modules/router';

const protectedAxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export type FetchState = {
  baseURL?: string;
};

const fetchState = reactive<FetchState>({
  baseURL: undefined,
});

export const fetchFactory = (config?: FetchFactoryConfig) => {
  const setBaseURL = (value: string) => {
    fetchState.baseURL = value;
  };

  const innerErrorHandler = () => {
    const { push } = router;
    const { hideLoader } = loader();

    push?.({ name: 'error-view' });
    hideLoader();
  };

  const defaultErrorHandler = config?.errorHandler ?? innerErrorHandler;

  const innerFetch = async <R>(
    config: FetchConfig,
    instance: AxiosInstance = axios,
    errorHandler: ErrorHandlerFunction | undefined,
  ) => {
    try {
      const response = await instance<R>(config);

      const headers = (
        response.headers instanceof AxiosHeaders ? response.headers.toJSON() : response.headers
      ) as FetchHeaders;

      const output: FetchResponse<R> = {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers,
      };

      return output;
    } catch (e: unknown) {
      errorHandler?.(e as FetchError);
      throw e;
    }
  };

  const fetch = <R>(
    config: FetchConfig,
    errorHandler: ErrorHandlerFunction | null = defaultErrorHandler,
  ) => {
    return innerFetch<R>(
      { baseURL: fetchState.baseURL, ...config },
      axios,
      errorHandler === null ? undefined : errorHandler,
    );
  };

  const protectedFetch = async <R>(
    config: FetchConfig,
    errorHandler: ErrorHandlerFunction | null = defaultErrorHandler,
  ) => {
    if (!fetchState.baseURL) {
      innerErrorHandler();
      throw {
        message: 'Base Api Url is not set, please set it using useFetch() module.',
      } as FetchError;
    }

    if (!authState.token) {
      innerErrorHandler();
      throw {
        message: 'Authorization token is not set, please set it using useAuthorization() module.',
      } as FetchError;
    }

    if (!authState.isAuthorized) {
      innerErrorHandler();
      throw { message: 'Authorization token is invalid.' } as FetchError;
    }

    return innerFetch<R>(
      {
        baseURL: fetchState.baseURL,
        ...config,
        headers: {
          Authorization: authState.token,
          ...config.headers,
        },
      },
      protectedAxiosInstance,
      errorHandler === null ? undefined : errorHandler,
    );
  };

  return {
    fetch,
    protectedFetch,
    baseURL: readonly(fetchState).baseURL,
    setBaseURL,
  };
};
