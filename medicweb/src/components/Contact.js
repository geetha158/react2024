import React from "react";

function Contact() {
  return (
    <div>
      <div>
        <div className="bg-emerald-500 text-slate-100 text-4xl py-8 text-center">
          Contact Us
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex">
          <div className="w-3/5">
            <iframe
              className="w-full h-full border-0 py-5 px-5 block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.028114262832!2d78.4703955749353!3d17.41043838348065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9758c5bf4ac3%3A0x2ae80c933f083746!2sHussain%20Sagar%20Boating%20Point!5e0!3m2!1sen!2sin!4v1714893545054!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className="py-10 px-10 w-2/5">
            <h1 className="text-emerald-500 text-4xl">Our Location</h1>
            <div className="text-slate-500 text-md mt-3">
              <p>500 Terry Francine Street</p>
              <p>San Francisco, CA 94158</p>
            </div>
            <div className="text-slate-500 text-md mt-3 mb-2">
              <p>Tel: 123-456-7890</p>
              <p>Fax: 123-456-7890</p>
            </div>
            <div className="text-slate-500 text-md mb-2">
              <p>info@mysite.com</p>
            </div>
            <div>
              <form className="text-slate-500">
                <div className="flex gap-x-4 mb-2">
                  <div className="flex flex-col">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="border-solid border-2 border-slate-400 py-1 px-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="border-solid border-2 border-slate-400 py-1 px-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-2 mb-2">
                  <label>Email</label>
                  <input
                    type="email"
                    className="border-solid border-2 border-slate-400 py-1 px-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Message</label>

                  <input
                    type="text"
                    className="h-20 border-solid border-2 w-full border-slate-400  py-1 px-2"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-purple-500 text-slate-100 py-2 px-5 mt-3 ">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
