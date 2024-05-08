import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Booked() {
  return (
    <div>
      <div className="booked">
        <div className="flex justify-center items-center mb-20 ">
          <div className="bg-slate-200 text-center rounded-2xl px-20 py-20 mt-20 mb-20 relative">
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faXmark}
                className="absolute text-slate-100 bg-purple-500 px-2  py-2 rounded-full top-6 right-7"
              />
            </Link>

            <div>
              <div className="text-purple-500 text-2xl">
                Booking Successfully completed
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-purple-500 text-3xl mt-3 mb-5"
                />
              </div>
              <p className="text-slate-100 text-lg inline-block bg-purple-500 px-3 py-3 rounded-2xl">
                Thank You ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booked;
