import { useEffect } from "react";

import Badge from "../ui/Badge";
import Loading from "../ui/Loading";
import Card from "../ui/Card";
import Alert from "../ui/Alert";

import { useUsersData } from "../../hooks/useUsersData";

const Users = (props) => {
  const {
    data: usersData,
    isLoading: usersDataIsLoading,
    isError: usersDataIsError,
    isSuccess: usersDataIsSuccess,
    refetch: usersDataRefetch,
  } = useUsersData();

  useEffect(() => {
    usersDataRefetch();
  }, [props.createSuccess, props.createStatus, usersDataRefetch]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
      {usersDataIsLoading && <Loading className="m-auto my-5 col-span-2" />}
      {usersDataIsError && (
        <Alert variant="error" className="col-span-2">
          Error loading.
        </Alert>
      )}
      {usersDataIsSuccess &&
        usersData.map((item, index) => (
          <Card className="my-0" key={index}>
            <div className="font-bold">{item.name}</div>
            <div className="text-gray-500 text-sm mb-3">{item.email}</div>
            {item.user_roles.map((itemInner, indexInner) => (
              <Badge key={indexInner}>{itemInner.role.name}</Badge>
            ))}
          </Card>
        ))}
    </div>
  );
};

export default Users;
