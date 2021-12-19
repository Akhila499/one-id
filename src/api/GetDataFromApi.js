import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GetDataFromApi = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`http://localhost:3001/test`)
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

  const editData = async (arg) => {
    const id = arg.id;
    const editUrl = `http://localhost:3001/test/${id}`;
    await axios
      .put(editUrl, {
        id: arg.id,
        name: arg.Name,
        username: arg.UserName,
        email: arg.email,
        phone: arg.phone,
        website: arg.website,
        company: {
          bs: arg.companyBs,
          catchPhrase: arg.companyCatch,
          name: arg.companyName,
        },
        address: {
          city: arg.addressCity,
          geo: {
            lat: arg.addressGeoLat,
            lng: arg.addressGeoLng,
          },
          street: arg.addressStreet,
          suite: arg.addressSuite,
          zipcode: arg.addressZip,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);

        getUsers();
      });
  };

  const findMaxId = () => {
    const ids = Data.map((user) => user.id);
    const max = Math.max(ids);
    return max + 1;
  };

  const addNewUser = async (arg) => {
    console.log("lenght", Number(Data.length - 1), arg);
    const Id = findMaxId();
    const newUserData = {
      id: Id,
      name: arg.name,
      username: arg.userName,
      email: arg.email,
      phone: arg.phone,
      website: arg.website,
      company: {
        bs: arg.companyBs,
        catchPhrase: arg.companyCatch,
        name: arg.companyName,
      },
      address: {
        city: arg.addressCity,
        geo: {
          lat: arg.addressGeoLat,
          lng: arg.addressGeoLng,
        },
        street: arg.addressStreet,
        suite: arg.addressSuite,
        zipcode: arg.addressZip,
      },
    };
    console.log("neww", newUserData);
    await axios
      .post("http://localhost:3001/test", newUserData)
      .then((res) => {
        console.log("post res", res);
      })
      .catch((err) => console.log(err));
  };

  const getUserById = (id) => {
    const userDetails = Data.filter((user) => user.id === Number(id));
    return userDetails;
  };

  return { Data, getUsers, deleteUser, editData, getUserById, addNewUser };
};

export default GetDataFromApi;
