import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Label from "../components/ui/Label";
import Loading from "../components/ui/Loading";
import Alert from "../components/ui/Alert";

import { useRolesData } from "../hooks/useRolesData";
import { useUsersCreate } from "../hooks/useUsersData";

import Users from "../components/Users/Users";

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    data: rolesData,
    isLoading: rolesDataIsLoading,
    isError: rolesDataIsError,
    isSuccess: rolesDataIsSuccess,
  } = useRolesData();

  const {
    mutate: usersCreate,
    data: usersCreateData,
    isLoading: usersCreateIsLoading,
    isError: usersCreateIsError,
    isSuccess: usersCreateIsSuccess,
  } = useUsersCreate();

  const inlineErrorClass = "text-red-400 text-xs";

  const submitHandler = (data) => {
    usersCreate(data);
  };

  useEffect(() => {
    if (usersCreateData?.data.status === true) {
      reset();
    }
  }, [usersCreateIsSuccess, usersCreateData, reset]);

  return (
    <>
      <Card>
        <form
          onSubmit={handleSubmit((data) => {
            submitHandler(data);
          })}
        >
          <div className="mb-4 grid grid-cols-2 gap-4">
            {usersCreateIsSuccess && usersCreateData.data.status === true && (
              <Alert className="col-span-2">User successfully saved.</Alert>
            )}
            {usersCreateIsSuccess && usersCreateData.data.status === false && (
              <Alert variant="error" className="col-span-2">
                {usersCreateData.data.message.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </Alert>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  maxLength: {
                    value: 255,
                    message: "Email max length is 255",
                  },
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address invalid",
                  },
                })}
              />
              <p className={errors.email && inlineErrorClass + " mt-2"}>
                {errors.email?.message}
              </p>
            </div>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                {...register("name", {
                  required: "Full Name is required",
                  maxLength: {
                    value: 255,
                    message: "Full Name max length is 255",
                  },
                })}
              />
              <p className={errors.name && inlineErrorClass + " mt-2"}>
                {errors.name?.message}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="roles">Roles</Label>
            {rolesDataIsSuccess && (
              <Select
                {...register("roles", {
                  required: "Role is required",
                })}
                multiple
                className="h-20"
              >
                {rolesData.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            )}
            <p className={errors.roles && inlineErrorClass + " mt-2"}>
              {errors.roles?.message}
            </p>
            {rolesDataIsLoading && <Loading className="m-auto my-5" />}
            {rolesDataIsError && <Alert variant="error" className="col-span-2">Error loading.</Alert>}
          </div>
          {usersCreateIsLoading && <Loading className="m-auto my-5" />}
          {usersCreateIsError && <Alert variant="error" className="col-span-2">Error loading.</Alert>}
          {!usersCreateIsLoading && <Button className="w-full">Save</Button>}
        </form>
      </Card>
      <Users
        createSuccess={usersCreateIsSuccess}
        createStatus={usersCreateData?.data.status}
      />
    </>
  );
};

export default Home;
