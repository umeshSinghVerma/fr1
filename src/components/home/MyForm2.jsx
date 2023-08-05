import Image from "next/image";
import React from "react";
import DateSelector from "../Elements/DateSelector";

const MyForm2 = () => {
  const firstColumn = [
    {
      title: "התחל להקלידהתחל ",
      entites: [
        {
          email: "yoshi@gmail.com",
          phone: "343242342",
          text: "Hello",
        },
        {
          email: "yoshi@gmail.com",
          phone: "343242342",
          text: "Hello",
        },
        {
          email: "yoshi@gmail.com",
          phone: "343242342",
          text: "Hello",
        },
        {
          email: "yoshi@gmail.com",
          phone: "343242342",
          text: "Hello",
        },
      ],
    },
    {
      title: "התחל להקליד",
      entites: [
        {
          email: "david@gmail.com",
          phone: "343242342",
          text: "Hello",
        },
        {
          email: "david@gmail.com",
          phone: "343242342",
          text: "Hello",
        },
      ],
    },
  ];
  return (
    <section className="w-4/5 mx-auto">
      <div className=" flex mt-5 gap-8">
        <div className="w-[40%] flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col flex-wrap">
              <label
                for="input-1"
                className="block font-bold py-2 text-gray-500"
              >
                התחל להקליד
              </label>
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  placeholder="התחל להקליד"
                  className="w-[30%] flex-auto p-2.5 bg-transparent rounded-md border outline-none"
                />
                <div className="flex flex-auto items-center text-gray-400 border rounded-md">
                  <input
                    type="text"
                    placeholder="התחל להקליד"
                    id="input-3"
                    className="w-full p-2.5 bg-transparent rounded-md outline-none"
                  />
                  <div className="px-4 py-2 rounded-l-md bg-white border-r">
                    050
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="התחל להקליד"
                  className="p-2.5 flex-auto bg-transparent rounded-md border outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col flex-wrap">
              <label
                for="input-1"
                className="block font-bold py-2 text-gray-500"
              >
                התחל להקליד
              </label>
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  placeholder="התחל להקליד"
                  className="w-[30%] flex-auto p-2.5 bg-transparent rounded-md border outline-none"
                />
                <div className="flex flex-auto items-center text-gray-400 border rounded-md">
                  <input
                    type="text"
                    placeholder="התחל להקליד"
                    id="input-3"
                    className="w-full p-2.5 bg-transparent rounded-md outline-none"
                  />
                  <div className="px-4 py-2 rounded-l-md bg-white border-r">
                    050
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="התחל להקליד"
                  className="p-2.5 flex-auto bg-transparent rounded-md border outline-none"
                />
              </div>
            </div>
          </div>
          {firstColumn.map((obj, index) => {
            return (
              <div key={index} className="m-4" style={{ fontSize: "20px" }}>
                <p className="font-bold mb-2">{obj.title}</p>
                <div>
                  {obj.entites.map((obj, index) => {
                    return (
                      <div
                        className="flex gap-8 text-gray-500 mb-2"
                        style={{ fontSize: "12px" }}
                        key={index}
                      >
                        <span>{obj.text}</span>
                        <span>{obj.phone}</span>
                        <span>{obj.email}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="w-[60%] flex flex-col border-r-2 border-gray-400 gap-y-4"
          style={{ paddingRight: "40px" }}
        >
          <div className="flex gap-x-4 flex-wrap items-start">
            <div className=" flex flex-col">
              <label className="mb-2 block font-bold py-2 text-gray-500">
                תאריך האירוע{" "}
              </label>
              <div>
                <DateSelector />
              </div>
            </div>
            <div className=" flex flex-col">
              <label className="mb-2 block font-bold py-2 text-gray-500">
                תאריך האירוע{" "}
              </label>
              <input
                type="text"
                placeholder="התחל להקליד"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none"
              />
            </div>
          </div>
          <div className="m-4" style={{ fontSize: "12px" }}>
            <p className="font-bold mb-2"> התחל להקליד</p>
            <div className="flex justify-start items-center gap-5 mb-2">
              <Image
                src={"/insideEvent.png"}
                alt="img"
                width={90}
                height={90}
              />
              <Image
                src={"/insideEvent.png"}
                alt="img"
                width={90}
                height={90}
              />
              <div className="relative">
                <Image
                  className="opacity-50"
                  src={"/insideEvent.png"}
                  alt="img"
                  width={90}
                  height={90}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
                  5+
                </div>
              </div>
              <button className="flex py-2 items-center gap-2 mr-auto px-4 text-[#b0b0b0] bg-[#f7f7f7] rounded-lg">
                להקליד
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b0b0b0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col m-4 justify-center items-start">
            <p className="font-bold mb-2"> התחל להקליד</p>
            <div className="w-full justify-between flex gap-x-8 flex-wrap">
              <button className="flex py-2 flex-auto w-3/5 items-center justify-between gap-2 mr-auto px-4 text-[#b0b0b0] bg-[#f7f7f7] rounded-lg">
                <span>להקליד להקליד</span>
                <span>www.youtube.com/wtfeud</span>
              </button>
              <button className="flex py-2 justify-center flex-auto w-1/5 items-center gap-2 mr-auto px-4 text-[#b0b0b0] bg-[#f7f7f7] rounded-lg">
                להקליד
              </button>
            </div>
          </div>
          <div className="flex flex-col m-4 justify-center items-start">
            <p className="font-bold mb-2"> התחל להקליד</p>
            <div className="w-full justify-between flex gap-x-8 flex-wrap">
              <button className="flex py-2 flex-auto w-3/5 items-center justify-between gap-2 mr-auto px-4 text-[#b0b0b0] bg-[#f7f7f7] rounded-lg">
                <span>להקליד להקליד</span>
                <span>www.youtube.com/wtfeud</span>
              </button>
              <button className="flex py-2 justify-center flex-auto w-1/5 items-center gap-2 mr-auto px-4 text-[#b0b0b0] bg-[#f7f7f7] rounded-lg">
                להקליד
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyForm2;
