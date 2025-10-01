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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product"
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
