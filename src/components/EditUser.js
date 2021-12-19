import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetDataFromApi from "../api/GetDataFromApi";
import { useNavigate } from "react-router-dom";
const EditUser = (props) => {
  const navigate = useNavigate();

  const params = useParams();
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
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
  //getting user.id from params
  console.log("!!!", params.userId);
  const id = params.userId;
  const { getUserById, editData } = GetDataFromApi();
  //getting user details using user.id
  let details = getUserById(params.userId);
  console.log("details", details);

  useEffect(() => {
    getUserById();
  }, []);

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
      <div className="editblock">
        <h4>Edit User Details</h4>
        {details[0] && (
          <form onSubmit={handleSubmit}>
            <input
              className="input-css"
              required
              type="text"
              value={Name}
              placeholder={details[0].name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={UserName}
              placeholder={details[0].username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={email}
              placeholder={details[0].email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={phone}
              placeholder={details[0].phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={website}
              placeholder={details[0].website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={companyBs}
              placeholder={details[0].company.bs}
              onChange={(e) => setCompanyBs(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={companyCatch}
              placeholder={details[0].company.catchPhrase}
              onChange={(e) => setCompanyCatch(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={companyName}
              placeholder={details[0].company.name}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={addressCity}
              placeholder={details[0].address.city}
              onChange={(e) => setAddressCity(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={addressGeoLat}
              placeholder={details[0].address.geo.lat}
              onChange={(e) => setAddressGeoLat(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={addressGeoLng}
              placeholder={details[0].address.geo.lng}
              onChange={(e) => setAddressGeoLng(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={addressStreet}
              placeholder={details[0].address.street}
              onChange={(e) => setAddressStreet(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={addressSuite}
              placeholder={details[0].address.suite}
              onChange={(e) => setAddressSuite(e.target.value)}
            />
            <input
              className="input-css"
              required
              type="text"
              value={addressZip}
              placeholder={details[0].address.zipcode}
              onChange={(e) => setAddressZip(e.target.value)}
            />
            <button type="submit" className="Submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default EditUser;
