import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto my-10 pb-10 text-center pt-5">
        <figure
         className="max-w-[400px] justify-center mx-auto">
          <img
            src="https://img.freepik.com/vrije-vector/pagina-niet-gevonden-concept-illustratie_114360-1869.jpg"
            alt="not found image"
          />
        </figure>
        <h3 className="mx-auto text-center pt-5 text-xl font-bold">
          Page Not Found
        </h3>
        <p className="text-sm">Could not find requested resource</p>
        <br />
        <Link href="/" className="mt-10 text-sm underline">
          RETURN HOME
        </Link>
      </div>
    </>
  );
}
