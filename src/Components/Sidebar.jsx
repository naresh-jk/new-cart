import React, { Component } from "react";
import "./ComponentStyle.css";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <ul>
        <li className="list m-2"><h6>sell</h6>
        <hr />
        <ul>
        <li className="list">Catalog</li>
        <div className="order">
            <li className="list dropdown-toggle dropdown-toggle-split m-2" data-toggle="collapse">Order</li>
          <ul>
            <div className="dropdown-menu">
              <li className="list">Products</li>
              <li className="list">Categories</li>
              <li className="list">Monitoring</li>
              <li className="list">files</li>
              </div>
          </ul>
        </div>
        

        <li className="list">Customers</li>

        <li className="list">customer Service</li>

        <li className="list">Stats</li>
      </ul>
      <hr />
        </li>
        <li className="list"><h6>Improve</h6></li>
        <hr />
        <li className="list"><h6>configure</h6></li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
