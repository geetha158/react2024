import React from "react";
import {
  faCircleExclamation,
  faLocationDot,
  faPhone,
  faUser,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  function esc(e) {
    if (e.keyCode === 27) {
      closeform();
    }
  }
  function openform() {
    console.log("hi");
    document.querySelector(".declareform").classList.remove("hidden");
  }
  function closeform() {
    document.querySelector(".declareform").classList.add("hidden");
  }
  return (
    <div className="top-0 left-0 w-full">
      <div className="declare_text bg-purple-500 text-white text-sm h-12 py-3 text-center">
        {" "}
        <FontAwesomeIcon icon={faCircleExclamation} /> We're committed to a
        clean and safe facility.{" "}
        <button onClick={openform} className="underline" onKeyDown={esc}>
          Submit
        </button>{" "}
        your health declaration
      </div>
      <div className="declareform hidden max-w-2xl py-20 px-7 h-full bg-white">
        <div>
          <div className="flex text-purple-500 items-center justify-between">
            <h1 className="text-5xl">Health Declaration</h1>
            <button onClick={closeform}>
              <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
            </button>
          </div>

          <p className="text-slate-500 mt-10 mb-5">
            Please fill out the following health declaration form in order to
            participate in our activity. Submissions are valid up to 24 hours
            prior to the activity.
          </p>
          <form className="text-slate-500 text-xl">
            <div className="flex gap-x-4">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  className="border-solid border-b-2 border-slate-600 py-1 px-2"
                />
              </div>
              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  className="border-solid border-b-2 border-slate-600 py-1 px-2"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 mb-4">
              <label>Email</label>
              <input
                type="email"
                className="border-solid border-b-2 border-slate-600 py-1 px-2"
              />
            </div>
            <div className="flex gap-1 mb-3">
              <input type="checkbox" />
              <label className="cursor-pointer">
                My body temperature is greater than 98.6 F/ 37.7 C
              </label>
            </div>
            <div>
              <label>Are you experiencing any flu symptoms?</label>
              <div className="flex">
                <input type="radio" />
                <p>Yes</p>
              </div>
              <div className="flex">
                <input type="radio" />
                <p>No</p>
              </div>
              <div className="mt-2 flex flex-col">
                <label>Please elaborate:</label>
                <input
                  type="text"
                  className="w-full h-full border-solid border-2 border-slate-600 py-1 px-2"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex flex-col">
                  <label>Select a date</label>
                  <input type="date" />
                </div>
                <div className="flex flex-col">
                  <label>Initials</label>
                  <input
                    type="text"
                    className="border-solid border-2 border-slate-600 py-1 px-2"
                  />
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <input type="checkbox" />
                <label>
                  I confirm that the information provided in this form is true
                </label>
              </div>
              <div className="bg-purple-500 flex justify-center mt-20">
                <button className="text-slate-100 py-2">SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="basic_details  bg-slate-200 text-grey flex justify-around text-sm h-12 py-3 px-20">
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} className="text-emerald-500" />{" "}
          500 Terry Francine Street San Francisco, CA 94158
        </div>
        <div className="Phone">
          <FontAwesomeIcon icon={faPhone} className="text-emerald-500" /> Phone:
          7396094410
        </div>
      </div>
      <div className="header flex justify-evenly items-center">
        <div className="header_right">
          <p className="text-4xl">
            <span className="text-purple-500">Medical</span>
            <span className="text-emerald-500">Clinic</span>
          </p>
          <p className="text-sm text-slate-400">Exams & Diagnostics</p>
        </div>
        <div className="header_left">
          <Link to="/" className="mr-10">
            HOME
          </Link>
          <Link to="/about" className="mr-10">
            ABOUT US
          </Link>
          <Link to="/departments" className="mr-10">
            <select className="outline-none">
              <option>DEPARTMENTS</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
            </select>
          </Link>
          <Link to="/insurance" className="mr-10">
            INSURANCE
          </Link>
          <Link to="/contact" className="mr-10">
            CONTACT US
          </Link>
          <Link to="/login" className="mr-10">
            <FontAwesomeIcon icon={faUser} className="text-purple-500" /> Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
