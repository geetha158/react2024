import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

function Bookonline() {
  const dataState = useContext(DataContext);
  console.log(dataState);
  const details = [
    {
      name: "Sonography",
      time: "1 Hr",
      price: "$320",
      image:
        "https://tetonops.com/wp-content/uploads/2023/03/What-is-orthopedic-surgery-.png",
    },
    {
      name: "Consult with a cardiologist",
      time: "1 Hr",
      price: "$100",
      image:
        "https://www.dmchinternationalpatients.com/imgs/int/cardiology.jpg",
    },
    {
      name: "Consult with a doctor",
      time: "1 Hr",
      price: "$80",
      image:
        "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg",
    },
    {
      name: "X-Ray Examination",
      time: "1 Hr",
      price: "$430",
      image: "https://www.mymed.com/image/220/medicalarticle/800",
    },
    {
      name: "MRI Examination",
      time: "1 Hr",
      price: "$450",
      image:
        "https://static01.nyt.com/images/2023/09/18/well/WELL-PRENUVO1/WELL-PRENUVO1-superJumbo.jpg",
    },
    {
      name: "Consult with a neurologist",
      time: "1 Hr",
      price: "$120",
      image:
        "https://medical.rossu.edu/sites/g/files/krcnkv261/files/styles/atge_3_2_crop_md/public/2022-04/Neurology_0.jpg?h=670365ce&itok=jqbuxS-J",
    },
  ];

  function booknowfunc(e) {
    // console.log(e.target.closest("div").parentElement);
    // const booknow = document.querySelector(".booknow");
    const res = e.target.closest("div").parentElement;
    console.log(res);
    const [name, time, price] = [
      res.children[0].textContent,
      res.children[1].textContent,
      res.children[2].textContent,
    ];

    const data1 = {
      name1: name,
      time1: time,
      price1: price,
    };
    dataState.setData({ data1 });
    console.log(dataState);
    console.log(data1);
    console.log(name, time, price);
  }
  return (
    <div>
      <div className="bg-emerald-500 text-slate-100 text-4xl py-8 text-center">
        Book Online
      </div>
      <div className="flex justify-center items-center">
        <div>
          <div>
            <div className="grid grid-cols-3 gap-4 items-center justify-center py-10">
              {details.map((detail) => {
                return (
                  <div className="flex flex-col">
                    <img src={detail.image} alt="" className="max-w-xs" />
                    <div className="flex items-center justify-center bg-slate-200 py-10 h-60">
                      <div>
                        <h1 className="text-emerald-500 text-xl mb-4">
                          {detail.name}
                        </h1>
                        <h1 className="text-slate-500 text-center">
                          {detail.time}
                        </h1>
                        <h1 className="text-slate-500 mb-6 text-center">
                          {detail.price}
                        </h1>

                        <div className="flex justify-center items-center">
                          <button
                            onClick={booknowfunc}
                            className="booknow bg-purple-500 text-slate-100 px-2 py-1"
                          >
                            <Link to={"/booknow"}>BOOK NOW</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookonline;
