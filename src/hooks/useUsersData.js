import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const useUsersData = () => {
  return useQuery(["users"], async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}api/users`
    );
    return data;
  });
};

const useUsersCreate = (data) => {
  return useMutation({
    mutationFn: (data) => {
      return axios.post(`${process.env.REACT_APP_API_URL}api/users`, data);
    },
  });
};

export { useUsersData, useUsersCreate };
