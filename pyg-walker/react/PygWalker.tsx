import React from "react";
import { pluginApiRequest } from "./plugin-lib";

export const PygWalker = ({ loadData }: { loadData: string }) => {
  const [html, setHtml] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetcher = async () => {
      const res = await pluginApiRequest("pyg-walker", loadData);

      setHtml(await res.text());
    };

    fetcher();
  }, []);

  if (!html) {
    return <p>Loading...</p>;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
