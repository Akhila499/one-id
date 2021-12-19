import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetDataFromApi from "../api/GetDataFromApi";

const Form = (props) => {
  const { details, id } = props;
  const navigate = useNavigate();
  const [Name, setName] = useState(details.name || "");
  const [UserName, setUserName] = useState(details.username || "");
  const [email, setEmail] = useState(details.email || "");
  const [phone, setPhone] = useState(details.phone || "");
  const [website, setWebsite] = useState(details.website || "");
  const [companyBs, setCompanyBs] = useState(details.company.bs || "");
  const [companyCatch, setCompanyCatch] = useState(
    details.company.catchPhrase || ""
  );
  const [companyName, setCompanyName] = useState(details.company.name || "");
  const [addressCity, setAddressCity] = useState(details.address.city || "");
  const [addressGeoLat, setAddressGeoLat] = useState(
    details.address.geo.lat || ""
  );
  const [addressGeoLng, setAddressGeoLng] = useState(
    details.address.geo.lng || ""
  );
  const [addressStreet, setAddressStreet] = useState(
    details.address.street || ""
  );
  const [addressSuite, setAddressSuite] = useState(details.address.suite || "");
  const [addressZip, setAddressZip] = useState(details.address.zipcode || "");

  const { editData } = GetDataFromApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("");

    let dataToEdit = {
      id,
      Name,
      UserName,
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

    editData(dataToEdit).then((res) => {
      navigate("/");
      window.location.href = "/";
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input-css"
          required
          type="text"
          value={Name}
          // placeholder={details[0].name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={UserName}
          // placeholder={details[0].username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={email}
          // placeholder={details[0].email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={phone}
          // placeholder={details[0].phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={website}
          // placeholder={details[0].website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={companyBs}
          placeholder={details.company.bs}
          onChange={(e) => setCompanyBs(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={companyCatch}
          placeholder={details.company.catchPhrase}
          onChange={(e) => setCompanyCatch(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={companyName}
          // placeholder={details[0].company.name}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={addressCity}
          // placeholder={details[0].address.city}
          onChange={(e) => setAddressCity(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={addressGeoLat}
          // placeholder={details[0].address.geo.lat}
          onChange={(e) => setAddressGeoLat(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={addressGeoLng}
          // placeholder={details[0].address.geo.lng}
          onChange={(e) => setAddressGeoLng(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={addressStreet}
          // placeholder={details[0].address.street}
          onChange={(e) => setAddressStreet(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={addressSuite}
          // placeholder={details[0].address.suite}
          onChange={(e) => setAddressSuite(e.target.value)}
        />
        <input
          className="input-css"
          required
          type="text"
          value={addressZip}
          // placeholder={details[0].address.zipcode}
          onChange={(e) => setAddressZip(e.target.value)}
        />
        <button type="submit" className="Submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
