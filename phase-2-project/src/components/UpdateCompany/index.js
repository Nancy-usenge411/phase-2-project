import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './UpdateCompany.css';  // Import the CSS file

const UpdateCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({ name: "", address: "", owner: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/companies/${id}`)
      .then(res => setCompany(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/companies/${id}`, company)
      .then(() => navigate(`/companies/${id}`))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h1>Update Company</h1>
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
        <button type="submit" className="button">Update</button>
      </form>
    </div>
  );
};

export default UpdateCompany;