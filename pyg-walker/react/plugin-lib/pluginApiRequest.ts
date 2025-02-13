export const pluginApiRequest = async (
  apiName: string,
  alias: string,
  init?: RequestInit
): Promise<Response> => {
  const response = await fetch(`/api/plugin/${apiName}/${alias}`, {
    ...init,
  });

  return response;
};
