import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let timeOut;
    const handleRequest = async (url) => {
      let request = await fetch(url);
      try {
        if (request.ok) {
          request = await request.json();
          timeOut = setTimeout(() => {
            setData(request);
            setError({ error: false });
            setLoading(false);
          }, 2000);
        }
        throw {
          error: true,
          status: request.status || "00",
          statusText: request.statusText || "error in request",
        };
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    handleRequest(url);

    return clearTimeout(timeOut);
  }, [url]);

  return { data, error, loading };
};
