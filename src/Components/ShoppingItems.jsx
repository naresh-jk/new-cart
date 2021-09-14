import React, { Component, useState } from "react";
import { getItems, getItem } from "../fakeItems";
import './ComponentStyle.css'

const ShoppingItems = () => {
  const [Items,setItem] = useState(getItems);

  const handleDelete =(item) => {
    setItem(Items.filter(i => i.id !== item.id))
      
  }

  return (
    <div className="items row col-10 m-3">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>position</th>
            <th>Image</th>
            <th>title</th>
            <th>id</th>
            <th>color</th>
            <th>price</th>
            <th>availability</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {Items.map((item) => (
            <tr key={item.id}>
              <td>{item.position}</td>
              <td><img className="image" src={item.image}/></td>
              <td>{item.title}</td>
              <td>{item.id}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.availability}</td>
              <td><button onClick={()=>handleDelete(item)} className="btn-danger">remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingItems;
