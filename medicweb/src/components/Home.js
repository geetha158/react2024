import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Mainbody from "./Mainbody";
import Newsletter from "./Newsletter";
import Slideshow from "./Slideshow";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Slideshow />
      <div className="scheduleapt bg-purple-500 py-7 flex justify-around text-slate-100">
        <p className=" text-3xl">
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="bold text-xl mr-2"
          />
          Schedule your appointment online
        </p>
        <button className="bg-purple-600 px-3 text-xs">
          <Link to={"bookonline"}>BOOK APPOINTMENT</Link>
        </button>
      </div>
      <Mainbody />
      <Newsletter />
    </div>
  );
}

export default Home;
