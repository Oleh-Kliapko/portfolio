import { useState, useEffect } from "react";
import axios from "axios";

import { IRepo } from "../constants";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const useFetch = () => {
  const [data, setData] = useState<IRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const checkImageExistence = async (url: string): Promise<boolean> => {
    try {
      await axios.get(url, { timeout: 1000 });
      return true;
    } catch (error: any) {
      return false;
    }
  };

  const getData = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        "https://api.github.com/users/Oleh-Kliapko/repos",
        { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
      );

      const repositories = await Promise.all(
        data.map(async (repo: IRepo) => {
          const repoLogoUrl = `https://raw.githubusercontent.com/Oleh-Kliapko/${repo.name}/main/public/repoLogo.jpg`;

          let imageUrl = null;

          try {
            const isImageExist = await checkImageExistence(repoLogoUrl);
            imageUrl = isImageExist ? repoLogoUrl : null;
          } catch (error: Error | any) {
            console.error(
              `Помилка перевірки наявності зображення для репозиторію ${repo.name}: ${error.message}`
            );
          }

          return { ...repo, repoLogoUrl: imageUrl };
        })
      );

      setData(repositories);
      setIsLoading(false);
    } catch (error) {
      setError(error);
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
