import React from "react";
import Row from "./Row";

const Table = ({ columns, data, pages, currentPage, PaginationFun }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <div className="flex items-center justify-between py-4 bg-white  dark:bg-secondary-dark-bg px-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500  dark:text-gray-200"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2  pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
        <div>
          <button
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5  dark:bg-secondary-dark-bg  dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            Action
          </button>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
      </div>
      <table className="w-full text-sm text-right text-gray-500  dark:text-gray-200  px-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700  dark:text-gray-200">
          <tr className="">
            {columns.map((item, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                <div className="flex items-center">
                  {item.name}
                  {item.sort && (
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 mr-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  )}
                </div>
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <Row columns={columns} data={item} key={i} />
          ))}
        </tbody>
      </table>

      <nav aria-label="navigation">
        <ul className=" flex items-center justify-center py-4 bg-white  dark:bg-secondary-dark-bg">
          <li>
            <a
              onClick={() => PaginationFun(currentPage - 1)}
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  dark:bg-secondary-dark-bg dark:border-gray-700  dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          {pages.map((page, index) => (
            <li key={index} className="">
              <a
                onClick={() => PaginationFun(page)}
                className={
                  page === currentPage
                    ? " z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : " px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:bg-secondary-dark-bg dark:border-gray-700  dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                {page}
              </a>
            </li>
          ))}

          <li>
            <a
              onClick={() => PaginationFun(currentPage + 1)}
              className="block px-3 py-2 mr-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  dark:bg-secondary-dark-bg dark:border-gray-700  dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
