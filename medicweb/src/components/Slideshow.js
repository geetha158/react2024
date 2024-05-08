import React from "react";
import { Link } from "react-router-dom";

function Slideshow() {
  return (
    <div className="bg-[url(https://t4.ftcdn.net/jpg/05/24/59/15/240_F_524591524_u5Xa6QQPR0FsB6oJVPOGHj4gfUbInjRz.jpg)] bg-cover bg-no-repeat bg-center py-20 pt-62 pb-20 h-200">
      <div className=" text-center max-w-3xl mr-auto ml-auto flex text-slate-100 gap-x-4 mt-10">
        <div className="text-left bg-emerald-400 px-4 py-5 rounded-sm">
          <h2 className="text-2xl font-semibold">Cardiology</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
          <button className="mt-5 bg-emerald-500 px-3 py-2 rounded-lg">
            <Link to={"/cardiology"}>Read More</Link>
          </button>
        </div>
        <div className="text-left bg-emerald-500 px-4 py-5 rounded-sm">
          <h2 className="text-2xl font-semibold">Nuerology</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
          <button className="mt-5 bg-emerald-600 px-3 py-2 rounded-lg">
            <Link to={"/neurology"}>Read More</Link>
          </button>
        </div>
        <div className="text-left bg-emerald-600 px-4 py-5 rounded-sm">
          <h2 className="text-2xl font-semibold">Orthopedics</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
          <button className="mt-5 bg-emerald-700 px-3 py-2 rounded-lg">
            <Link to={"/orthopedics"}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
