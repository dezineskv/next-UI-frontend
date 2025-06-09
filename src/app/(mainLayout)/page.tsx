"use client";
import { TTodo } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

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
      <Hero />

      <div className="mx-auto text-center pt-10 mb-10">Todos</div>
      <div className="flex justify-center items-center">
        <p className="text-white max-w[50%] text-center mb-2">
          Here's a list of ToDos from the API...
        </p>
      </div>
      <div className="overflow-x-auto max-w-5xl mx-auto bg-slate-500 my-10">
        <table className="table">
          {/* head */}
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
            {/* row 1 */}
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
                  {/* <Link
                    href={`/todo/${todo.id}`}
                    className="btn btn-xs btn-primary"
                  > */}
                  <button className="btn btn-xs btn-primary">Edit</button>
                  {/* </Link>
                  <Link
                    href={`/todo/${todo.id}`}
                    className="btn btn-xs btn-primary"
                  > */}
                  <button className="btn btn-xs btn-primary">Delete</button>
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodosList;
