import React from "react";

const ModuleHero = () => {
  return (
    <>
      <div className="hero bg-base-200 my-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://th.bing.com/th/id/OIP.2FmoP_hZ7etc0kNf6U3epQHaEK?rs=1&pid=ImgDetMain"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h2 className="text-5xl font-bold header md: pl-10">In the News</h2>
            <h3 className="py-6 text-black md: pl-10">
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
