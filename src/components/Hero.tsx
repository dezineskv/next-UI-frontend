import React from 'react'

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://th.bing.com/th/id/R.b2c9f2fbd6e6fd010f6e71193d766056?rik=vhx5lO0AarxgDQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fFH1uQNX.jpg&ehk=VKQnry8uhkCc6NMdbPTrl%2bKXD61f5b3SALrf70nXtHs%3d&risl=&pid=ImgRaw&r=0)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero