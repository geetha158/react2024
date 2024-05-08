import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

function Payment() {
  const { data, timeV, dateV } = useContext(DataContext);

  return (
    <div>
      <div className="payment">
        <div className=" items-center justify-center py-10 ml-20">
          <div className="mb-4">
            <Link to={"/bookonline"} className="text-slate-500">
              <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
              Back
            </Link>
          </div>
          <div className="flex justify-between  gap-5 w-3/5">
            <div>
              <h1
                className="text-3xl text-slate-500 mb-3
             border-solid border-b-2 w-full border-purple-400 pb-2"
              >
                Client Details
              </h1>
              <p className="mb-2">Tell us about bit more about yourself</p>
              <p className="text-purple-500 ml-4 mb-4">
                Already have a account?
                <Link className="underline">Log in </Link>
                for easy booking
              </p>
              <form className="text-slate-500">
                <div className="flex gap-7 mb-4">
                  <div className="flex flex-col">
                    <label>First Name</label>
                    <input
                      type="text"
                      className=" border-solid border-2 w-full border-slate-400  py-1 px-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className=" border-solid border-2 w-full border-slate-400  py-1 px-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label>Email</label>
                  <input
                    type="email"
                    className=" border-solid border-2 w-full border-slate-400  py-1 px-2"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label>Add your message</label>
                  <input
                    type="text"
                    className="h-20 border-solid border-2 w-full border-slate-400  py-1 px-2"
                  />
                </div>
                <div>
                  <h1 className="mb-2 text-2xl border-solid border-b-2 w-full border-purple-400  pb-2">
                    Payment
                  </h1>
                  <div className="mt-4 text-lg ">
                    {data.data1.name1}
                    <div className="mt-2">
                      <select className=" border-solid border-2 w-full border-slate-400  py-1 px-2">
                        <option>
                          <div>Pay Now</div>
                        </option>
                        <option value>
                          <div>Pay Later</div>
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <div className="flex justify-items-end items-center w-ful gap-3 mb-2">
                <h1 className="text-slate-500 text-3xl">Booking Details</h1>
                <button>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-slate-400 text-2xl"
                  />
                </button>
              </div>
              <div className="text-slate-500 text-md mt-2 mb-3">
                <h2></h2>
                <p>{data.data1.name1}</p>
                <p className="mt-2">
                  {dateV} at {timeV}
                </p>
              </div>
              <div className="text-purple-500 text-lg mb-5 border-solid border-b-2 w-full border-slate-400 pb-3">
                <p>Medical Clinic</p>
                <p>Staff Member #1</p>
                <p>{data.data1.time1}</p>
              </div>
              <div className="flex justify-center items-center bg-purple-500">
                <button className=" text-slate-100 py-1 px-2">
                  <Link to={"/booked"}>BOOK NOW</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
