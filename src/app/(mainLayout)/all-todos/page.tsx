"use client";
import { TTodo } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const TodosList = () => {
  const [allTodos, setAllTodos] = useState<TTodo[]>([]);
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const fetchTodos = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      setAllTodos(res.data.todos);
      setData(res.data.todos);
    } catch (error) {}
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(allTodos);

  // Sort data based on the current sort configuration
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Handle sorting when a table header is clicked
  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      const direction =
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc";
      return { key, direction };
    });
  };

  return (
    <>
      <h2 className="mx-auto text-center pt-15 text-5xl font-bold text-amber-500">
        TODOS
      </h2>
      <div className="overflow-x-auto max-w-5xl mx-auto bg-slate-500 my-10">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo</th>
              <th onClick={() => handleSort("completed")}>
                <div className="flex">
                  Status&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                  </svg>
                </div>
              </th>
              <th>User_ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {allTodos.length > 10 ? ( */}

            <>
              {sortedData.map((todo: TTodo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.todo}</td>
                  <td>{todo.completed ? "Completed" : "Pending"}</td>
                  <td>{todo.userId}</td>
                  <td className="space-x-1">
                    <Link
                      href={`/todo/${todo.id}`}
                      className="btn btn-xs btn-primary"
                    >
                      Details
                    </Link>

                    <button className="btn btn-xs btn-primary">Edit</button>

                    <button className="btn btn-xs btn-primary">Delete</button>
                  </td>
                </tr>
              ))}
            </>
            {/* // ) : (
              //   <div className="text-red-700">No ToDos</div>
              // )} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodosList;
