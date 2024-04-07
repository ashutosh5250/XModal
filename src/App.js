import "./App.css";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.phone.toString().length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    const currentDate = new Date();
    const dob = new Date(data.dob);
    if (dob >= currentDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    closeModal();
  };

  return (
    <div>
      <div className="header">
        <h1>User Details Modal</h1>
      </div>
      <div className="open_form">
        <button onClick={openModal}>Open Form</button>
      </div>
      <div className={`modal ${showModal ? "show" : ""}`} onClick={closeModal}>
        <div className="modal-content" onClick={stopPropagation}>
          <span onClick={closeModal}></span>
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              id="username"
              type="name"
              required
              onChange={handleChange}
              value={data.username}
            ></input>
            <label htmlFor="email">Email Address:</label>
            <input
              name="email"
              id="email"
              type="email"
              required
              onChange={handleChange}
              value={data.email}
            ></input>
            <label htmlFor="phone">Phone Number:</label>
            <input
              name="phone"
              id="phone"
              type="number"
              required
              onChange={handleChange}
              value={data.phone}
            ></input>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              name="dob"
              id="dob"
              type="date"
              required
              onChange={handleChange}
              value={data.dob}
            ></input>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
