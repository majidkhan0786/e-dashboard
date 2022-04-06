import React, { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const AddItems = () => {
    if (!productName || !price || !category || !company) {
      setError(true);
      return false;
    }

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
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Handlesubmit = (e)=>{
    e.preventDefault();
    setProductName("");
    setCategory("");
    setCompany("");
    setPrice("");
  }
  
  return (
    <>
      <div className="container">
        <h1>Add Your Products </h1>

        <div className="addData-div">
         <form onSubmit={Handlesubmit} >
         <input
            type="text"
            className="form-control"
            placeholder="Enter Poduct Name"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          {error && !productName && (
            <span className="invalid-input">Enter Valid Product </span>
          )}
          <input
            type="number"
            className="form-control"
            placeholder="Enter Price"
            min={0}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          { error && !price && <span className="invalid-input">Characters is NOT  Allowed</span> }
          <input
            type="text"
            className="form-control"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
         { error && !category && <span className="invalid-input">Enter Valid Category</span> }
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
         { error && !company &&  <span className="invalid-input">Enter Valid Company </span>}
          <button onClick={AddItems} className="btn btn-primary mt-2">
            Add Product
          </button>
         </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
