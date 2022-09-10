import React, { useState } from 'react';
import './SearchForm.css';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + searchValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={handleChange}
          value={searchValue} />
      </form>
    </div>
  );

}

export default SearchForm;