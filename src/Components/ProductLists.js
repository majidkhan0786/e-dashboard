import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductLists = () => {
  const [productList, setProductList] = useState([]);

  const getAllProductList = async () => {
    let result = await axios.get("http://localhost:5000/productsList");
    // console.log(result.data);
    setProductList(result.data);
  };

  useEffect(() => {
    getAllProductList();
  }, []);

  const DelteProduct = (id) => {
    var data = "";

    var config = {
      method: "delete",
      url: `http://localhost:5000/product/${id}`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // After Deleting The Data in product page will Automatic Refreshed  so 
        // we have Call this function in this Apis
        getAllProductList();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Here is Your Products List </h1>
        <div className="product-list">
          <ul>
            <li>S.No</li>
            <li>Name </li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>Operation </li>
          </ul>
          {productList &&
            productList.length >= 0 &&
            productList.map((ListTingData, ind) => {
              return (
                <>
                  <div className="ul listing-dy">
                    <ul key={ListTingData._id}>
                      <li>{ind + 1}</li>
                      <li>{ListTingData.name}</li>
                      <li>${ListTingData.price}</li>
                      <li>{ListTingData.category}</li>
                      <li>{ListTingData.company}</li>
                      <li>
                        <button
                          onClick={() => DelteProduct(ListTingData._id)}
                          className="btn-del"
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductLists;
