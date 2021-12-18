import React from "react";
import { useState } from "react";
import GetDataFromApi from "../api/GetDataFromApi";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyBs, setCompanyBs] = useState("");
  const [companyCatch, setCompanyCatch] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressGeoLat, setAddressGeoLat] = useState("");
  const [addressGeoLng, setAddressGeoLng] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressSuite, setAddressSuite] = useState("");
  const [addressZip, setAddressZip] = useState("");

  const { addNewUser } = GetDataFromApi();
  const formSubmit = (e) => {
    e.preventDefault();
    let newUserObj = {
      name,
      userName,
      email,
      phone,
      website,
      companyBs,
      companyCatch,
      companyName,
      addressCity,
      addressGeoLat,
      addressGeoLng,
      addressStreet,
      addressSuite,
      addressZip,
    };
    addNewUser(newUserObj).then((res) => {
      navigate("/");
      window.location.href = "/";
    });
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={userName}
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Bs"
          value={companyBs}
          onChange={(e) => setCompanyBs(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company catch"
          value={companyCatch}
          onChange={(e) => setCompanyCatch(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address City"
          value={addressCity}
          onChange={(e) => setAddressCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address-Geo-Latitude"
          value={addressGeoLat}
          onChange={(e) => setAddressGeoLat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address-Geo-Longitude"
          value={addressGeoLng}
          onChange={(e) => setAddressGeoLng(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address Street"
          value={addressStreet}
          onChange={(e) => setAddressStreet(e.target.value)}
        />
        <input
          type="text"
          value={addressSuite}
          placeholder="Address Suite"
          onChange={(e) => setAddressSuite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address Zip"
          value={addressZip}
          onChange={(e) => setAddressZip(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUser;
