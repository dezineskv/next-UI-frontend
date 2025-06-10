"use client";
import { TTodo } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductsTop = () => {
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
      <h2 className="mx-auto text-center pt-15 text-5xl font-bold">Products</h2>
      <h2 className="mx-auto text-center pt-5 text-xl font-bold">
        FEATURED PRODUCTS
      </h2>

      <div className="flex justify-center items-center flex-col max-w-10/12">
        <p className="w-full flex justify-end mt-5">
          <a href="/all-products">
            <button className="btn ">All Products</button>
          </a>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mx-auto w-11/12 my-10">
        <>
          {allTodos.map((todo: TTodo) =>
            todo.id <= 6 ? (
              <div
                key={todo.id}
                className="card bg-base-100 image-full w-96 shadow-sm"
              >
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />{" "}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{todo.todo}</h2>

                  <div>{todo.completed ? "Completed" : "Pending"}</div>

                  <div className="space-x-1">
                    <Link
                      href={`/todo/${todo.id}`}
                      className="btn btn-xs btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </>
      </div>
    </>
  );
};

export default ProductsTop;
