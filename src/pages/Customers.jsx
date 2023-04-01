import React, { useEffect, useState } from "react";
import Table from "../components/dynamic-table/Table";
import axios from "axios";
import _ from "lodash";
import Loading from "../components/loading/Loading";
const columns = [
  {
    name: "آیدی",
    sort: true,
    accessor: "id",
  },
  {
    name: "آیدی کاربر",
    sort: true,
    accessor: "userId",
  },
  {
    name: "عنوان",
    sort: true,
    accessor: "title",
  },
  {
    name: "وضعیت",
    sort: false,
    accessor: "completed",
  },
];
const Customer = () => {
  const pageSize = 10;
  const [paginationData, setPaginationData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState();
  const PaginationFun = (pageNum) => {
    setCurrentPage(pageNum);
    const startIndex = (pageNum - 1) * pageSize;
    const paginateData = _(data).slice(startIndex).take(pageSize).value();
    setPaginationData(paginateData);
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      // console.log(res.data);
      setData(res.data);
      setPaginationData(_(res.data).slice(0).take(pageSize).value());
    });
  }, []);
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <div className="m-4 mt-20">
      {!paginationData ? (
        <Loading />
      ) : (
        <Table
          data={paginationData}
          columns={columns}
          pages={pages}
          currentPage={currentPage}
          PaginationFun={PaginationFun}
        />
      )}
    </div>
  );
};

export default Customer;
