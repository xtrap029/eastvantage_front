import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useRolesData = () => {
  return useQuery(
    ["roles"],
    async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}api/roles`
      );
      return data;
    },
    {
      refetchOnMount: false,
    }
  );
};
