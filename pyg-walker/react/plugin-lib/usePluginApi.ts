import { useEffect, useState } from "react";
import { pluginApiRequest } from "./pluginApiRequest";

type Result<T> =
  | {
      status: "pending";
      data?: unknown;
    }
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      error: unknown;
    };

export const usePluginApi = <T>(
  apiName: string,
  loadData: string,
  init: RequestInit,
  select: (response: Response) => T
) => {
  const [result, setResult] = useState<Result<Awaited<T>>>({
    status: "pending",
  });

  useEffect(() => {
    const fetcher = async () => {
      if (result.status !== "pending") {
        return;
      }
      try {
        const res = await pluginApiRequest(apiName, loadData, init);
        setResult({ status: "success", data: await select(res) });
      } catch (error) {
        setResult({ status: "error", error });
      }
    };

    fetcher();
  }, []);

  return result;
};
