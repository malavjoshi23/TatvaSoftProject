import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddBook() {
  const data = {
    title: "",
    author: "",
    page: "",
    price: "",
    isbn: "",
  };

  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/addBook", inputData).then((resp) => {
      console.log(resp);
    });
    toast.success("Book added successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
    setInputData(data);
  };

  return (
    <div>
      <h2 align="center">Add Book</h2>
      <br></br>
      <form
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Book Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            value={inputData.title}
            onChange={handleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Book Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            aria-describedby="emailHelp"
            name="author"
            value={inputData.author}
            onChange={handleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="page" className="form-label">
            Book Pages
          </label>
          <input
            type="number"
            className="form-control"
            id="page"
            aria-describedby="emailHelp"
            name="page"
            value={inputData.page}
            onChange={handleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Book Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            aria-describedby="emailHelp"
            name="price"
            value={inputData.price}
            onChange={handleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">
            ISBN
          </label>
          <input
            type="number"
            className="form-control"
            id="isbn"
            name="isbn"
            value={inputData.isbn}
            onChange={handleData}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" className="btn btn-dark" onClick={handleSubmit}>
            Add Book
          </button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </div>
  );
}
