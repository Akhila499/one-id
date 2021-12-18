import React from "react";
import User from "./User";
import { useState } from "react";
import { Link } from "react-router-dom";

const Users = (props) => {
  const { data } = props;

  console.log("fre", data);

  const user = data.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <>
      {/* <button type="submit">Add new user</button> */}
      <Link
        to={{
          pathname: `/users/new`,
        }}
      >
        add new user
      </Link>
      {user}
    </>
  );
};

export default Users;
