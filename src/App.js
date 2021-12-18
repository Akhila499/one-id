import "./App.css";
import GetDataFromApi from "./api/GetDataFromApi";
import Users from "./components/Users";
import { Route, Routes } from "react-router-dom";
import User from "./components/User";
import EditUser from "./components/EditUser";
import { useState, useEffect } from "react";
import { getUsers } from "./api/GetDataFromApi";
function App() {
  // const { getUsers } = GetDataFromApi();
  const [Lists, setLists] = useState([]);
  console.log("&&&"); //1

  const apiData = GetDataFromApi();
  console.log("che", apiData.Data);
  // setLists(apiData.Data);
  // useEffect(() => {
  // }, [apiData.Data]);

  return (
    <>
      <Routes>
        <Route path="//*" element={<Users data={apiData.Data} />}></Route>
        <Route path="/users/:userId" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
