import "./App.css";
import GetDataFromApi from "./api/GetDataFromApi";
import Users from "./components/Users";
import { Route, Routes } from "react-router-dom";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

function App() {
  let apiData = GetDataFromApi();

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="//*" element={<Users data={apiData.Data} />}></Route>
          <Route path="/users/:userId" element={<EditUser />} />
          <Route path="/users/new" element={<AddUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
