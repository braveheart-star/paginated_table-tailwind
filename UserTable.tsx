import React from "react";
import { Table } from "../Table";

const tableHeader = [
  { path: "id", label: "id" },
  { path: "time", label: "time" },
  { path: "orders", label: "orders" },
  { path: "amount", label: "amount" },
  { path: "amount", label: "amount" },
];

export const UserTable = (props: any) => {
  const { users } = props;

  return (
    <div>
      <Table header={tableHeader} body={users} />
    </div>
  );
};
