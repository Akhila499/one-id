import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GetDataFromApi = () => {
  const [Data, setData] = useState([]);

  console.log("data111", Data); //2
  useEffect(() => {
    getUsers();
  }, []);
  const url = `http://localhost:3001/test`;
  const getUsers = async () => {
    await axios
      .get(url)
      .then((res) => {
        console.log("res@@@", res.data);

        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const deleteUser = (id) => {
    let delUrl = `http://localhost:3001/test/${id}`;

    let copyData1 = Data.filter((user) => user.id === id);

    axios
      .delete(delUrl, { data: copyData1[0] })
      .then((res) => {
        console.log("del res", res.data, res);
        let copyData = Data.filter((user) => user.id !== id);
        setData(copyData);
        window.location.reload();
        getUsers();
      })
      .catch((err) => {
        console.log("dele err", err);
      });
  };

  const editData = (id) => {
    let editUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(editUrl, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: "foo",
        username: "bar",
        userId: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return { Data, getUsers, deleteUser, editData };
};

export default GetDataFromApi;
