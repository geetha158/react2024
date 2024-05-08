import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faCopyright,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

//footer position can be fixed or sticky or null

function Footer() {
  return (
    <div>
      <div className=" left-0 bottom-0 w-full flex mt-4 bg-emerald-500 text-slate-100 justify-around items-center h-25 py-10 text-base">
        <div className="footer_details">
          <div className="mb-3">
            <FontAwesomeIcon icon={faCopyright} /> 2035 by Medical Clinic.
            Powered and secured by <Link className="underline">Geetha</Link>
          </div>
          <div className="flex justify-end">
            <div>
              <FontAwesomeIcon icon={faLocationDot} /> 500 Terry Francine St,
              San Francisco, CA 94158
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} className="ml-10" /> Tel:
              123-456-7890
            </div>
          </div>
        </div>
        <div className="flex text-2xl">
          <Link className="mr-7">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
      <div>
        <div className="fixed right-0 bottom-0 flex justify-end">
          <button className="bg-amber-500 text-slate-100 py-3 px-7 w-45 h-10 rounded-t-2xl">
            <Link to={"/bookonline"}>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
