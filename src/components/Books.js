import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

const Books = () => {
  const [bookData, setBookData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookData, setFilteredBookData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/showBooks").then((resp) => {
      setBookData(resp.data.data);
    });
  }, []);

  useEffect(() => {
    const filteredData = bookData.filter((data) =>
      data.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBookData(filteredData);
  }, [bookData, searchTerm]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBookData.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <br />
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Book Here"
          aria-label="Search"
          value={searchTerm}
          onChange={handleInputChange}
          onSubmit={(event) => event.preventDefault()}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <br />
      {Array.isArray(currentBooks) && currentBooks.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Title</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((data, index) => {
              const { isbn, title, author, price } = data;
              const bookIndex = indexOfFirstBook + index + 1;
              return (
                <tr key={isbn}>
                  <th scope="row">{bookIndex}</th>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{price}₹</td>
                  <td className="button-row">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      style={{ marginRight: "5px" }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginLeft: "5px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No books available</p>
      )}

      {/* Pagination */}
      <Pagination>
        {Array.from({
          length: Math.ceil(filteredBookData.length / booksPerPage),
        }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <Link to="/addbook">
        <button
          type="button"
          className="btn btn-dark"
          style={{ marginLeft: "20px" }}
        >
          Add a Book
        </button>
      </Link>
    </div>
  );
};

export default Books;