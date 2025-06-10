"use client";
import { TTodo } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const TodosList = () => {
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
      <h2 className="mx-auto text-center pt-5 text-xl font-bold">ToDos List</h2>
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
            {/* {allTodos.length > 10 ? ( */}

            <>
              {allTodos.map((todo: TTodo) => (
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
