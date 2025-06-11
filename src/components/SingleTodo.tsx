"use client";
import { TTodo } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleTodo = ({ id }: { id: number }) => {
  const [singleTodo, setSingleTodo] = useState<TTodo>();
  //   const [deleteTodo, setDeleteTodo] = useState<TTodo>();

  const fetchTodo = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/todos/${id}`);
      setSingleTodo(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTodo();
  }, [id]);
  console.log(singleTodo);

  return (
    <>
      <h2 className="mx-auto text-center pt-5 text-xl font-bold header">
        Detail Page
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mx-auto w-11/12 my-10">
        <div className="card card-side bg-base-100 shadow-sm max-w-10/12">
          <figure className="max-w-[180px]">
            <img
              src="https://thumbs.dreamstime.com/b/clipboard-checklist-icon-checklist-complete-tasks-to-do-list-survey-exam-concepts-best-quality-flat-clipboard-checklist-112434298.jpg"
              alt="Image"
              className=""
            />
          </figure>
          <div className="card-body align-middle my-auto pl-0 w-[300px]">
            <h2 className="card-title">{singleTodo?.todo}</h2>
            <p>
              <span className="font-bold">Status: </span>
              {singleTodo?.completed ? "Completed" : "Not Completed"}
            </p>
            <p>
              <span className="font-bold">User ID: </span>
              {singleTodo?.userId}
            </p>
          </div>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
