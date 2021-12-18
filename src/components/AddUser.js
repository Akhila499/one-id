import React from "react";
import { useState } from "react";
const AddUser = () => {
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
  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={userName}
          placeholder=""
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          value={companyBs}
          onChange={(e) => setCompanyBs(e.target.value)}
        />
        <input
          type="text"
          value={companyCatch}
          onChange={(e) => setCompanyCatch(e.target.value)}
        />
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          value={addressCity}
          onChange={(e) => setAddressCity(e.target.value)}
        />
        <input
          type="text"
          value={addressGeoLat}
          onChange={(e) => setAddressGeoLat(e.target.value)}
        />
        <input
          type="text"
          value={addressGeoLng}
          onChange={(e) => setAddressGeoLng(e.target.value)}
        />
        <input
          type="text"
          value={addressStreet}
          onChange={(e) => setAddressStreet(e.target.value)}
        />
        <input
          type="text"
          value={addressSuite}
          onChange={(e) => setAddressSuite(e.target.value)}
        />
        <input
          type="text"
          value={addressZip}
          onChange={(e) => setAddressZip(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUser;
