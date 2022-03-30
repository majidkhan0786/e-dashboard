import React, { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const AddItems = () => {
    // console.log(productName, price, category, company);
    // const userId = localStorage.getItem()
    var data = JSON.stringify({
      name: productName,
      price: price,
      category: category,
      company: company,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/add-product",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Add Your Products </h1>

        <div className="addData-div">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Poduct Name"
            value={productName}
            onChange={(e) => {setProductName(e.target.value)}}
            required
          />
          <input
            type="number"
            className="form-control"
            placeholder="Enter Price"
            min={0}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            required
          />
          <button onClick={AddItems} className="btn btn-primary mt-2">
            Add Product
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
