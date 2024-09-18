import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './CreateCompany.css';  // Import the CSS file

const CreateCompany = () => {
  const [company, setCompany] = useState({ name: "", address: "", owner: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/companies", company)
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h1>Create Company</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input type="text" name="name" value={company.name} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={company.address} onChange={handleChange} />
        </label>
        <label>
          Owner:
          <input type="text" name="owner" value={company.owner} onChange={handleChange} />
        </label>
        <button type="submit" className="button">Create</button>
      </form>
    </div>
  );
};

export default CreateCompany;