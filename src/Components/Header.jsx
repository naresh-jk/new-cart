import React, { Component } from "react";

const Header = () => {
  return ( <div className= "header">
    <nav className="navbar navbar-light bg-primary row ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h3>Pestashop</h3>
        </a>
        <form className="d-flex">
          <input
            className="form-control me-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-info" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    </div>
  );
};

export default Header;
