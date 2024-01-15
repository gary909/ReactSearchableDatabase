import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios simplifies some aspects of making HTTP requests
import './SearchableDatabase.css'; // Import the custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchableDatabase() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState({
    name: '',
    username: '',
    email: '',
    website: ''
  });

  const [showSearch, setShowSearch] = useState({
    name: false,
    username: false,
    email: false,
    website: false
  });

  // useEffect for fetching data
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm({ ...searchTerm, [event.target.name]: event.target.value });
  };


  const handleCheckboxChange = (event) => {
    setShowSearch({ ...showSearch, [event.target.name]: event.target.checked });
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.name.toLowerCase()) &&
    user.username.toLowerCase().includes(searchTerm.username.toLowerCase()) &&
    user.email.toLowerCase().includes(searchTerm.email.toLowerCase()) &&
    user.website.toLowerCase().includes(searchTerm.website.toLowerCase())
  );

  return (
    <div className="terminal-window">
      <div>
      <img src="/searchImage.png" alt="Search" style={{ width: '50px', height: '50px', marginBottom: '30px' }} />
      {/* Rest of your component */}
    </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="nameCheckbox"
          name="name"
          checked={showSearch.name}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="nameCheckbox">
          Search by Name
        </label>
      </div>

      {showSearch.name && (
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Search by name..."
          value={searchTerm.name}
          onChange={handleSearchChange}
        />
      )}

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="usernameCheckbox"
          name="username"
          checked={showSearch.username}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="usernameCheckbox">
          Search by Username
        </label>
      </div>

      {showSearch.username && (
        <input
          type="text"
          name="username"
          className="form-control mb-2"
          placeholder="Search by username..."
          value={searchTerm.username}
          onChange={handleSearchChange}
        />
      )}

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="emailCheckbox"
          name="email"
          checked={showSearch.email}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="emailCheckbox">
          Search by Email
        </label>
      </div>

      {showSearch.email && (
        <input
          type="text"
          name="email"
          className="form-control mb-2"
          placeholder="Search by email..."
          value={searchTerm.email}
          onChange={handleSearchChange}
        />
      )}

    <div className="form-check"> 
        <input
          className="form-check-input"
          type="checkbox"
          id="websiteCheckbox"
          name="website"
          checked={showSearch.website}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="websiteCheckbox">
          Search by Website
        </label>
      </div>

      {showSearch.website && (
        <input
          type="text"
          name="website"
          className="form-control mb-2"
          placeholder="Search by website..."
          value={searchTerm.website}
          onChange={handleSearchChange}
        />
      )}

      <br></br>

      <ul className="list-group-item">
        {filteredUsers.map(user => (
          <li key={user.id} className="list-group-item">
            {user.name} ({user.username})<br/> Email: {user.email}<br/> Website: {user.website}
            <br></br>---
          </li>
        ))}
      </ul>
    </div>
  );

}

export default SearchableDatabase;
