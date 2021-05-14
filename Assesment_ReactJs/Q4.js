//api call

import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    
  });

  const { name, username, email, phone } = user;

  useEffect(() => {
    loadUsers();
  }, []);

  // i donot get your api at mention in question so i use my local host machine api
  //you can change this api
  // gertting data from api
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  // for  delete user
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>grt data from api </h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;