'use client'
import { useRouter } from "next/navigation";
import React from "react";

const Table4 = () => {
  const tableItems = [
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      type: "UnActive",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      type: "UnActive",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      type: "UnActive",
      content2: "אביגדור אירועים",
      plan: "اشتراك سنوي",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      type: "UnActive",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      type: "UnActive",
      content2: "אביגדור אירועים",
      plan: "اشتراك سنوي",
    },
  ];
  const router = useRouter();
  return (
    <div className=" mx-auto px-4 md:px-8">
      <div className="mt-8 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-right">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-2 pr-6"></th>
              <th className="py-2 pr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a0a0a0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  className="inline"
                  stroke-linejoin="round"
                >
                  <path d="M12 19V6M5 12l7-7 7 7" />
                </svg>
                עוריאה םש
              </th>
              <th className="py-2 pr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a0a0a0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  className="inline"
                  stroke-linejoin="round"
                >
                  <path d="M12 19V6M5 12l7-7 7 7" />
                </svg>
                םינגראמה
              </th>
              <th className=" gap-x-2 py-2 pr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a0a0a0"
                  stroke-width="1.5"
                  className="inline"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 19V6M5 12l7-7 7 7" />
                </svg>
                עוריאה םוקימ
              </th>
              <th className="py-2 pr-6">ךיראת</th>
              <th className="py-2 pr-6">סוטטס</th>
              <th className="py-2 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {tableItems.map((item, idx) => (
              <tr className="hover:shadow-lg" key={idx} onClick={()=>{
                router.push('/home/postModle')
              }}>
                <td>
                  <input
                  onClick={(e)=>{
                    e.stopPropagation();
                  }}
                    type="checkbox"
                    class="h-3 w-3 cursor-pointer rounded border-gray-300"
                  />
                </td>
                <td className="pr-6 py-2 cursor-pointer whitespace-nowrap hover:underline" onClick={
                  (e)=>{
                    e.stopPropagation();
                  router.push('/home/InsideEventDetail/1')}
                  }>{item.name}</td>
                <td className="pr-6 py-2 whitespace-nowrap">
                  <div className="flex items-center overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/86.jpg"
                      className="w-10 h-10 rounded-full -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                      className="w-10 h-10 rounded-full  border-2 border-white"
                    />
                  </div>
                </td>
                <td className="pr-6 py-2 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs`}
                  >
                    {item.content2}
                  </span>
                </td>
                <td className="pr-6 py-2 whitespace-nowrap">{item.date}</td>
                <td className="pr-6 py-2 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs ${
                      item.type == "Active"
                        ? "text-green-600 bg-green-50"
                        : "text-yellow-600 bg-yellow-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="text-left whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a0a0a0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table4;
