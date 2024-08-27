import React, { useState, useEffect } from "react";
import axios from "axios";

function Orders() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      fetch("http://127.0.0.1:8000/api/orders")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response.orders);
          setProduct(response.orders);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProduct();
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/ordersdelete/" + id)
      .then(function (response) {
        console.log(response.data);
        alert("Successfully Deleted");
      });
  };

  return (
    <React.Fragment>
      <div className="container container_overflow">
        <div className="row">
          <div className="col-12">
            <h5 className="mb-4"> Keep Track Of Your Orders</h5>
            <p className="text-danger"> </p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Second Name</th>
                  <th scope="col">Home Address</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">orderedProduct ID</th>
                  <th scope="col" width="200">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.map((pdata, index) => (
                  <tr key={index}>
                    <td>{index + 1} </td>
                    <td>{pdata.first_name} </td>
                    <td>{pdata.last_name} </td>
                    <td>{pdata.home_address} </td>
                    <td>{pdata.contact_number} </td>
                    <td>{pdata.email} </td>
                    <td>{pdata.quantity} </td>
                    <td>{pdata.orderedProduct} </td>

                    <td>
                      <button
                        onClick={() => deleteProduct(pdata.id)}
                        className="btn btn-danger"
                      >
                        Fulfilled
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Orders;
