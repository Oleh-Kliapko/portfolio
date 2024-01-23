import { useState, useEffect } from "react";
import axios from "axios";

import { GITHUB_TOKEN } from "@/constants";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://api.github.com/users/Oleh-Kliapko/repos",
        { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const refetch = async () => {
    setIsLoading(true);
    getData();
  };

  return { data, isLoading, error, refetch };
};
