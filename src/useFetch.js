import React from "react";

const useFetch = () => {
  const [resquest, setResquestData] = React.useState(null);

   const setResquest = React.useCallback(async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    setResquestData(json);
  }, []);

  return [resquest, setResquest];
};

export default useFetch;
