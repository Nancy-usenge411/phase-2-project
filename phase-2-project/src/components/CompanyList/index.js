import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './CompanyList.css';  // Import the CSS file

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/companies")
      .then(res => setCompanies(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteCompany = (id) => {
    axios.delete(`http://localhost:5000/companies/${id}`)
      .then(() => setCompanies(companies.filter(company => company.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h1>Companies</h1>
      <Link to="/create" className="button button-primary create">Create Company</Link>
      <div className="company-list">
        {companies.map(company => (
          <div key={company.id} className="company-card">
            <h2>{company.name}</h2>
            <p><strong>Address:</strong> {company.address}</p>
            <p><strong>Owner:</strong> {company.owner}</p>
            <div className="actions">
              <Link to={`/companies/${company.id}`} className="button button-primary">View</Link>
              <button onClick={() => deleteCompany(company.id)} className="button button-danger">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;