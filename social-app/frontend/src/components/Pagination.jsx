import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const Pagination = ({
  postsPerPage = 9,
  numberPageItem = 5,
  count,
  onPaginate,
  pageNumber,
  previousPage,
  currentPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [numberPage, setNumberPage] = useState(Math.ceil(count / postsPerPage));
  const [numberItems, setNumberItems] = useState(Array(numberPageItem).fill(1));
  const [activePage, setActivePage] = useState(1);

  const changePage = (pageNumber) => {
    searchParams.set("page", pageNumber);
    setSearchParams(searchParams);
  };

  return (
    <div className="container">
      <div className="row">
        <nav aria-label="Page navigation" className="col-md-12 box p-2">
          <ul className="pagination">
            <li className="page-item-skip">
              <Link to="/posts?page=1">
                <BsChevronDoubleLeft />
              </Link>
            </li>
            <li className="page-item-skip">
              <Link
                onClick={previousPage}
                to={`/posts?page=${currentPage - 1}`}
              >
                <BsChevronLeft />
              </Link>
            </li>
            {numberItems.map((number, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  onPaginate(number);
                  setActivePage(number);
                }}
                className={`${
                  number === activePage ? "page-item active" : "page-item false"
                }`}
              >
                <button onClick={() => changePage(number + index)}>
                  {" "}
                  {number + index}
                </button>
              </li>
            ))}
            <li className="page-item-skip">
              <Link to={`/posts?page=${pageNumber + 1}`}>
                <BsChevronRight />
              </Link>
            </li>
            <li className="page-item-skip">
              <Link to={`/posts?page=${numberItems.length}`}>
                <BsChevronDoubleRight />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
