import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './CompanyDetails.css';  // Import the CSS file

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/companies/${id}`)
      .then(res => setCompany(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!company) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{company.name}</h1>
      <div className="company-detail">
        <p><strong>Address:</strong> {company.address}</p>
        <p><strong>Owner:</strong> {company.owner}</p>
        <Link to="/" className="button button-primary">Back to Companies</Link>
        <Link to={`/update/${company.id}`} className="button button-primary">Update Company</Link>
      </div>
    </div>
  );
};

export default CompanyDetails;