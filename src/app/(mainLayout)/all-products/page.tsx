"use client";
import { TTodo } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductsPage = () => {
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
      <h2 className="mx-auto text-center pt-5 text-5xl font-bold header">
        Products
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mx-auto w-11/12 my-10">
        {allTodos.map((todo: TTodo) => (
          <div key={todo.id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{todo.todo}</h2>
              <p>{todo.completed ? "Completed" : "Pending"}</p>
              <div className="card-actions justify-end">
                <Link href={`/todo/${todo.id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
