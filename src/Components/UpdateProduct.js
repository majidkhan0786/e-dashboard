/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Company, setCompany] = useState("");
  const params = useParams();

  useEffect(() => {
    console.log(params);
    getProductDetails();
  }, [params]);

  const Updates = (e) => {
    e.preventDefault();
    console.log(name, price, Category, Company);
  };

  const getProductDetails = () => {
    var config = {
        method: 'get',
        url: `http://localhost:5000/product/${params.id}`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setName(config.name)
      })
      .catch(function (error) {
        console.log(error);
      });
      
  };

  return (
    <>
      <div className="container">
        <h1>Update Your Products </h1>

        <div className="addData-div">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Poduct Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              type="number"
              className="form-control"
              placeholder="Enter Price"
              min={0}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category"
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              value={Company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />

            <button onClick={Updates} className="btn btn-primary mt-2">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
