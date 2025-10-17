import React, { useEffect, useState } from "react";
import "./Home.css";
import { HomeDataServices } from "../operations/HomeData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const token = localStorage.getItem("token")
  console.log("Token value", token)
  // Fetch user data (for now using dummy data)


  async function allApi() {
    const data = await dispatch(HomeDataServices(token, navigate))
    setUsers(data)
  }
  useEffect(() => {
    allApi();
  }, []);



  console.log(users)
  return (
    <div className="home-container">
      <h1>All Registered Users</h1>

      <div className="user-list">
        {users?.length > 0 ? (
          users?.map((user,index) => (
            <div className="user-card" key={index}>
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Password:</strong> {user.password.slice(0,12)}</p>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
