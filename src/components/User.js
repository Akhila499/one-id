import React from "react";
import "./user.scss";
import { Link } from "react-router-dom";
import GetDataFromApi from "../api/GetDataFromApi";
import EditUser from "./EditUser";

const User = (props) => {
  const { deleteUser, editData } = GetDataFromApi();

  const { user } = props ? props : "";

  console.log("user$$$", props);
  return (
    <>
      <div className="user-list">
        <div className="top">
          <p>
            <i className="fas fa-user-tag"></i>
            {user.username}
          </p>
          <Link
            to={{
              pathname: `/users/${user.id}`,
            }}
          >
            <i className="fas fa-user-edit"></i>
          </Link>
        </div>
        <ul className="user-details">
          <li>
            <i className="fas fa-user"></i>
            {user.name}
          </li>

          <li>
            <i className="fas fa-phone-alt"></i>
            {user.phone}
          </li>
          <li>
            <i className="fas fa-globe"></i>
            {user.website}
          </li>
          <li>
            <i className="far fa-building"></i>
            {user.company.name}
          </li>
          <li className="space">{user.company.bs}</li>
          <li className="space">{user.company.catchPhrase}</li>
        </ul>
        <ul>
          <li>
            <i className="fas fa-map-marked"></i>
            {user.address.city}
          </li>
          <li className="space">{user.address.geo.lat}</li>
          <li className="space">{user.address.geo.lng}</li>
          <li className="space">{user.address.street}</li>
          <li className="space">{user.address.suite}</li>
          <li className="space">{user.address.zipcode}</li>
        </ul>
        {/* <Link to={`/users/${user.id}`}>edit</Link> */}

        <div className="bottom">
          <button
            type="submit"
            className="delete"
            onClick={() => deleteUser(user.id)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
