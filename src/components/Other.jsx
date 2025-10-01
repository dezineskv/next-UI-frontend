import React from "react";

const Other = () => {
  return (
    <>
      <h2 className="mx-auto text-center py-5 text-5xl font-bold header">
        Highlights
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mx-auto mt-5 mb-10 pb-10 max-w-9/12">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Computer
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Computers are useful tools for many purposes, including
              communication, education, entertainment, and work.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Technology</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Laptop
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Laptops are portable computers that can be used for a variety of
              tasks, including work, entertainment, and education.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Technology</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1551842864-a185da0fbbbb?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Phone
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              A mobile phone is a portable device that allows users to make
              calls, send messages, and access the internet from almost
              anywhere.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
