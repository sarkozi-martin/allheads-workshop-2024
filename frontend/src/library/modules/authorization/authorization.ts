import { authState } from '@/library/modules/authorization/state';
import { fetchFactory } from '@/library/modules/fetch/fetchFactory';

export type AuthorizeConfig = {
  name: string;
  email: string;
};

export type AuthorizeResponse = {
  access_token: string;
};

export const authorization = () => {
  const { fetch } = fetchFactory();

  const setAuthToken = (token: string | undefined) => {
    authState.token = token;

    if (token) {
      authState.isAuthorized = true;
    }
  };

  const setIsAuthorized = (value: boolean) => {
    authState.isAuthorized = value;
  };

  const unAuthorize = () => {
    authState.token = undefined;
    authState.isAuthorized = false;
  };

  const authorize = async (data: AuthorizeConfig) => {
    const response = await fetch<AuthorizeResponse>({
      url: '/authorize',
      method: 'post',
      data,
    });

    authState.token = response.data.access_token;
    authState.isAuthorized = true;

    return;
  };

  return {
    authState,
    setAuthToken,
    setIsAuthorized,
    unAuthorize,
    authorize,
  };
};
