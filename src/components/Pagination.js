import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ position: "relative", left: "38rem", flex:"0 0 50%"}}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item" style={{margin:"10px"}}>
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;