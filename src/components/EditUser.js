import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetDataFromApi from "../api/GetDataFromApi";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
const EditUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  //getting user.id from params
  console.log("!!!", params.userId);
  const id = params.userId;

  const { getUserById, editData } = GetDataFromApi();
  //getting user details using user.id
  let details = getUserById(params.userId);
  console.log("details", details);
  // details && details[0].name ||
  useEffect(() => {
    getUserById();
  }, []);

  return (
    <>
      <div className="editblock">
        <h4>Edit User Details</h4>
        {details[0] && <Form details={details[0]} id={id} />}
      </div>
    </>
  );
};

export default EditUser;
