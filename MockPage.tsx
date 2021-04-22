import React, { useState } from "react";
import { slice, take } from "lodash";
import { UserTable } from "./UserTable";
import Pagination from "./Pagination";

const mockData = [
  {
    id: "Kyle",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
  {
    id: "Hubert",
    time: 1614534291,
    orders: 123,
    amount: 10,
  },
];

function pagination(items: any, pageNumber: any, pageSize: any) {
  const startIndex = (pageNumber - 1) * pageSize;
  return take(slice(items, startIndex), pageSize);
}

export const MockPage = () => {
  const [data, setData] = useState({
    users: null,
    // sortColumn: { path: "name", order: "ascending" },
    currentPage: 1,
    pageSize: 3,
  });

  function handlePageChange(page: any) {
    setData({
      ...data,
      currentPage: page,
    });
  }

  function handlePageSizeChange(pageSize: any) {
    setData({
      ...data,
      pageSize,
    });
  }
  const paginated = pagination(mockData, data.currentPage, data.pageSize);

  return (
    <div className="">
      <UserTable users={paginated} />
      <div className="mt-4 ">
        <Pagination
          itemsCount={mockData.length}
          pageSize={data.pageSize}
          currentPage={data.currentPage}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
};
