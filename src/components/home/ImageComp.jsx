import React from "react";

const ImageComp = () => {
  const persons = [
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      date: "11.03.23",
      location: "דאשבורד",
      name: "יסויו תינד לש הנותח",
      img: "https://randomuser.me/api/portraits/women/79.jpg",
    },
  ];
  return (
    <section>
      <div className="flex items-center">
        <ul className="flex gap-x-6">
          {persons.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between w-24 h-20 gap-x-4 border-2 border-gray-400 rounded-md p-6"
            >
                <img src={item.img} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ImageComp;
