import React from "react";

const ModuleHero = () => {
  return (
    <>
      <div className="hero bg-base-200 my-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h2 className="text-5xl font-bold header md: pl-10">In the News</h2>
            <h3 className="py-6 text-primary md: pl-10">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </h3>
            <div className="md: pl-10">
              <a href="/about">
                <button className="btn btn-primary">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleHero;
