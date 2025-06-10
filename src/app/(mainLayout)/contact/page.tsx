import React from "react";

const ContactUs = () => {
  return (
    <>
      <h2 className="mx-auto text-center pt-15 text-5xl font-bold text-amber-500">
        CONTACT
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mx-auto w-11/12 my-10">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Comment</label>
          <input type="text" className="input" placeholder="Comment" />

          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </div>
    </>
  );
};

export default ContactUs;
