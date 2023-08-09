import React from "react";

const ImageComp = () => {
  const persons = [
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYWRhfGVufDB8fDB8fHww&w=1000&q=80",
    },
  ];
  return (
    <section className="">
      <div className="flex items-center">
        <ul className="flex gap-x-6">
          {persons.map((item, idx) => (
            <li
              key={idx}
              className="flex group relative justify-between w-[228px] h-[270px] gap-x-4 rounded-2xl hover:opacity-60"
            >
              <img src={item.img} className="w-full h-full rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-neutral-300 z-10">
                <span>{item.name}</span>
                <div className="flex gap-x-4 justify-between">
                  <span className="flex gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.location}
                  </span>
                  <span className="flex gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="hidden group-hover:block z-10 absolute p-4">
                <button className="px-4 py-2 text-xl w-full mt-12 mb-4 text-white bg-black opacity-100 rounded-lg">
                  اضغط هنا
                </button>
                <button className="px-4 py-2 w-full text-xl border-black border-2 text-black bg-transparent rounded-lg">
                  اضغط هنا
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ImageComp;
