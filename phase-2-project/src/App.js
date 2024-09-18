import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import CompanyDetails from './components/CompanyDetails';
import CreateCompany from './components/CreateCompany';
import UpdateCompany from './components/UpdateCompany';
import NavBar from './components/NavBar'; // Import the Navbar component

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Add the Navbar at the top */}
        <Routes>
          <Route exact path="/" element={<CompanyList/>} />
          <Route path="/companies/:id" element={<CompanyDetails/>} />
          <Route path="/create" element={<CreateCompany/>} />
          <Route path="/update/:id" element={<UpdateCompany/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
