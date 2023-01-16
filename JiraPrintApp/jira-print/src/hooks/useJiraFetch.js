import { useState, useEffect } from "react";

function useJiraFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();
      setData(data);
    };
    dataFetch();
  }, [url]);

  return data;
}
export default useJiraFetch;
