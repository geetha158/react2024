import React from "react";
import { Link } from "react-router-dom";

function Cardiology() {
  return (
    <div>
      <div>
        <div className="bg-emerald-500 text-slate-100 text-4xl py-8 text-center">
          Cardiology
        </div>
        <div className="flex items-center justify-center gap-x-10 py-20">
          <img
            src="https://www.prevounce.com/hs-fs/hubfs/Website/cardiology/blood-pressure.jpg?width=1700&name=blood-pressure.jpg"
            alt=""
            className="max-w-md"
          />
          <div className="max-w-xl">
            <h2 className="text-emerald-500 text-3xl py-5">The best care</h2>
            <p className="text-slate-500 text-sm">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="mt-3 text-slate-500 text-sm">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are
            </p>
            <div className="flex py-5 gap-x-10 items-center">
              <button className="bg-purple-500 text-slate-100 py-2 px-2">
                <Link to={"/bookonline"}>BOOK APPOINTMENT</Link>
              </button>
              <p className="text-slate-700 text-lg">
                Schedule online. It's easy, fast and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardiology;
