import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

function Booknow() {
  const { data } = useContext(DataContext);
  console.log(data);
  const datesetting = useContext(DataContext);
  const timesetting = useContext(DataContext);
  function date() {
    const date = document.querySelector(".date").value;
    console.log(date);
    datesetting.setDateV(date);
  }
  function time() {
    const time = document.querySelector(".time").value;
    console.log(time);
    timesetting.setTimeV(time);
    console.log(timesetting.timeV);
  }
  function showdata() {}
  return (
    <div>
      <div className="flex justify-center items-center py-10">
        <div>
          <div>
            <Link to={"/bookonline"} className="text-slate-500">
              <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
              Back
            </Link>
          </div>
          <div className="mt-3">
            <h1 className="text-purple-500 text-3xl mb-2">
              {data.data1.name1}
            </h1>
            <h2 className="mt-1 text-slate-600 text-md">
              Check out our availability and book the date and time that works
              for you
            </h2>
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <h1 className="text-purple-500 text-3xl">
                Select a Date and Time
              </h1>
              <div className="flex justify-between mt-2">
                <div>
                  <input
                    type="date"
                    onChange={date}
                    className="date text-slate-500"
                  />
                </div>
                <div>
                  <input
                    type="time"
                    onChange={time}
                    className="time text-slate-500 "
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between gap-5 items-center">
                <h1 className="text-slate-500 text-xl">Service Details</h1>
                <button>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-slate-400"
                  />
                </button>
              </div>
              <div className="text-slate-500 text-md mt-2 mb-3">
                <h2></h2>
                <p>
                  {datesetting.dateV} at {timesetting.timeV}{" "}
                </p>
                <p>Medical clinic</p>
              </div>
              <div className="text-purple-500 text-lg mb-5">
                <p>Staff Member #1</p>
                <p>{data.data1.time1}</p>
                <p>{data.data1.price1}</p>
              </div>
              <div className="flex justify-center items-center bg-purple-500">
                <button
                  onClick={showdata}
                  className=" text-slate-100 py-1 px-2"
                >
                  <Link to={"/payment"}>NEXT</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booknow;
