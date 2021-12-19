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
      <div className="adduser-block">
        <h4>Add New User</h4>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Your Name"
            required
            className="input-css"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={userName}
            placeholder="User Name"
            className="input-css"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            className="input-css"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            className="input-css"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="website"
            value={website}
            className="input-css"
            required
            onChange={(e) => setWebsite(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company Bs"
            value={companyBs}
            className="input-css"
            required
            onChange={(e) => setCompanyBs(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company catch"
            value={companyCatch}
            className="input-css"
            required
            onChange={(e) => setCompanyCatch(e.target.value)}
          />
          <input
            type="text"
            placeholder=" Company Name"
            value={companyName}
            className="input-css"
            required
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address City"
            value={addressCity}
            className="input-css"
            required
            onChange={(e) => setAddressCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address-Geo-Latitude"
            value={addressGeoLat}
            className="input-css"
            required
            onChange={(e) => setAddressGeoLat(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address-Geo-Longitude"
            value={addressGeoLng}
            className="input-css"
            required
            onChange={(e) => setAddressGeoLng(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address Street"
            value={addressStreet}
            className="input-css"
            required
            onChange={(e) => setAddressStreet(e.target.value)}
          />
          <input
            type="text"
            value={addressSuite}
            placeholder="Address Suite"
            className="input-css"
            required
            onChange={(e) => setAddressSuite(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address Zip"
            value={addressZip}
            className="input-css"
            required
            onChange={(e) => setAddressZip(e.target.value)}
          />
          <button type="submit" className="Submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
