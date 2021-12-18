import React from "react";
import User from "./User";
import { useState } from "react";

const Users = (props) => {
  const { data } = props;

  console.log("fre", data);

  const user = data.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <>
      <button type="submit">Add new user</button>
      {user}
    </>
  );
};

export default Users;
