import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Newsletter() {
  function enterkey(e) {
    if (e.key === "Enter") {
      subscribe();
    }
  }
  function subscribe() {
    const thankyou = document.querySelector(".thankyou");
    const error = document.querySelector(".errorletter");

    const email = document.querySelector(".email");
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(email.value);
    if (email.value.match(validRegex)) {
      console.log("hi");
      thankyou.classList.remove("hidden");
      setTimeout(() => {
        thankyou.classList.add("hidden");
      }, 2000);
    } else {
      email.style.borderColor = "red";
      error.classList.remove("hidden");
      setTimeout(() => {
        email.style.borderColor = "black";
        error.classList.add("hidden");
      }, 700);
    }
    email.value = "";
  }
  return (
    <div className=" bg-slate-100">
      <div className="flex flex-col max-w-2xl mr-auto ml-auto text-center py-5">
        <h1 className="mt-20 mb-5 text-emerald-500 text-3xl">
          Sign up for our newsletter
        </h1>
        <p className="mb-10 text-slate-500">
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
        <input
          onKeyDown={enterkey}
          type="email"
          className=" email mt-5 px-5 py-2 border-solid border-b-2 border-slate-600 bg-slate-100 relative"
          placeholder="enter your email"
        ></input>
        <div className="errorletter hidden flex items-center justify-center gap-2 py-3 px-2">
          <FontAwesomeIcon icon={faAngleUp} />
          <p className=" border-solid border-2 py-1 px-5 gap-2 border-slate-600 flex items-center">
            <FontAwesomeIcon
              icon={faExclamation}
              className="bg-amber-500 text-white py-2 px-2 h-2 w-2"
            />
            enter a valid email address
          </p>
        </div>
        <button
          onClick={subscribe}
          className="bg-purple-500 text-slate-100 mt-3"
        >
          SUBSCRIBE NOW
        </button>
        <div className="thankyou mt-3 hidden">
          Thank you for Subscribing...❤️
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
