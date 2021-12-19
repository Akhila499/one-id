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
      <div className="usersblock">
        <Link
          to={{
            pathname: `/users/new`,
          }}
        >
          <i className="fas fa-user-plus"></i>
        </Link>
        {user}
      </div>
    </>
  );
};

export default Users;
