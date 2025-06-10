"use client";
import { TTodo } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const TodosTop = () => {
  const [allTodos, setAllTodos] = useState<TTodo[]>([]);
  const fetchTodos = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      setAllTodos(res.data.todos);
    } catch (error) {}
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(allTodos);

  return (
    <>
      <h2 className="mx-auto text-center pt-15 text-5xl font-bold">
        Top 5 ToDos
      </h2>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full flex justify-center mt-5">
          <a href="/all-todos">
            <button className="btn ">See All</button>
          </a>
        </p>
      </div>
      <div className="overflow-x-auto max-w-5xl mx-auto bg-slate-500 my-10">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo</th>
              <th>Status</th>
              <th>User_ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <>
              {allTodos.map((todo: TTodo) =>
                todo.id < 5 ? (
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
                      {/* <Link
                    href={`/todo/${todo.id}`}
                    className="btn btn-xs btn-primary"
                  > */}
                      <button className="btn btn-xs btn-primary">Edit</button>

                      <button className="btn btn-xs btn-primary">Delete</button>
                    </td>
                  </tr>
                ) : (
                  ""
                )
              )}
            </>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodosTop;
