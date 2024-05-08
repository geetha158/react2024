import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHouseChimneyMedical,
  faStethoscope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Mainbody() {
  return (
    <div>
      <div className="text-center max-w-6xl mr-auto ml-auto">
        <h2 className="text-emerald-500 text-4xl py-10">
          Taking Care of your Health
        </h2>
        <div className="flex justify-around mb-5">
          <div className="w-50">
            <FontAwesomeIcon
              icon={faComments}
              className="text-emerald-500 text-3xl"
            />
            <h3 className="text-emerald-500 text-2xl mb-3">
              Health Plans We Accept
            </h3>
            <p className="mb-4 text-slate-500">
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>

            <Link className="text-slate-600">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="bold text-base mr-1"
              />{" "}
              Read more
            </Link>
          </div>
          <div className="w-50">
            <FontAwesomeIcon
              icon={faHouseChimneyMedical}
              className="text-emerald-500 text-3xl"
            />
            <h3 className="text-emerald-500 text-2xl mb-3">
              Number 1 Medical Clinic in the Area
            </h3>
            <p className="mb-3 text-slate-500">
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>

            <Link className="text-slate-600">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="bold text-base mr-1"
              />{" "}
              Read more
            </Link>
          </div>
          <div className="w-50">
            <FontAwesomeIcon
              icon={faStethoscope}
              className="text-emerald-500 text-3xl"
            />
            <h3 className="text-emerald-500 text-2xl mb-3">
              Specialist Doctors we have
            </h3>
            <p className="mb-3 text-slate-500">
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>

            <Link className="text-slate-600">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="bold text-base mr-1"
              />{" "}
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
