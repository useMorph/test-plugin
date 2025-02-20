import React from "react";
import { usePluginApi } from "./plugin-lib";

export const PygWalker = ({
  loadData,
  width,
  height,
}: {
  loadData: string;
  width: string;
  height: string;
}) => {
  const res = usePluginApi(
    "pyg-walker",
    loadData,
    {
      method: "GET",
    },
    async (res) => await res.text()
  );

  if (res.status === "error") {
    return <p>error...</p>;
  }

  if (res.status === "pending") {
    return <p>loading...</p>;
  }

  return (
    <div style={{ width, height }}>
      <iframe
        srcDoc={res.data}
        width="100%"
        height="100%"
        style={{
          verticalAlign: "bottom",
          display: "block",
        }}
      />
    </div>
  );
};
