import React from "react";
import "./user.css";
import { Link } from "react-router-dom";
import GetDataFromApi from "../api/GetDataFromApi";

const User = (props) => {
  const { deleteUser, editData } = GetDataFromApi();

  const { user } = props;

  console.log("user$$$", props);
  return (
    <>
      <div className="user-list">
        <ul>
          <li>{user.name}</li>
          <li>{user.username}</li>
          <li>{user.phone}</li>
          <li>{user.website}</li>
          <li>{user.company.bs}</li>
          <li>{user.company.catchPhrase}</li>
          <li>{user.company.name}</li>
          <li>{user.address.city}</li>
          <li>{user.address.geo.lat}</li>
          <li>{user.address.geo.lng}</li>
          <li>{user.address.street}</li>
          <li>{user.address.suite}</li>
          <li>{user.address.zipcode}</li>
        </ul>
        <Link to={`/users/${user.id}`}>edit</Link>
        <button type="submit" onClick={() => editData(user.id)}>
          Edit
        </button>
        <button type="submit" onClick={() => deleteUser(user.id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default User;
