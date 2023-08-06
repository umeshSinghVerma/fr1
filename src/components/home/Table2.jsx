'use client'
import { useRouter } from "next/navigation";
import React from "react";

const Table2 = () => {
  const tableItems = [
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      status1: "SMS",
      Status1E: "Active",
      status2: "תרשואמ",
      status3: "אביגדור אירועים",
      type: "Active",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      status1: "SMS",
      Status1E: "unActive",
      status2: "תרשואמ",
      status3: "אביגדור אירועים",
      type: "Active",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      status1: "SMS",
      Status1E: "Active",
      status2: "תרשואמ",
      status3: "אביגדור אירועים",
      type: "Active",
      content2: "אביגדור אירועים",
      plan: "اشتراك سنوي",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      status1: "SMS",
      Status1E: "Active",
      status2: "תרשואמ",
      status3: "אביגדור אירועים",
      type: "Active",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      status: "תרשואמ",
      status1: "SMS",
      Status1E: "Active",
      status2: "תרשואמ",
      status3: "אביגדור אירועים",
      type: "Active",
      content2: "אביגדור אירועים",
      plan: "اشتراك سنوي",
    },
  ];
  const router = useRouter();
  return (
    <div className="w-full mx-auto px-4 md:px-8">
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-right">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6"></th>
              <th className="py-3 pr-6">
                עוריאה םש
                
              </th>
              <th className="py-3 pr-6">
                םינגראמה
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#a0a0a0"
                  className="inline"
                  stroke="#a0a0a0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 20h18L12 4z" />
                </svg>
              </th>
              <th className=" gap-x-2 py-3 pr-6">
                עוריאה םוקימ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#a0a0a0"
                  className="inline"
                  stroke="#a0a0a0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 20h18L12 4z" />
                </svg>
              </th>
              <th className="py-3 pr-6">ךיראת
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#a0a0a0"
                  className="inline "
                  stroke="#a0a0a0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 20h18L12 4z" />
                </svg></th>
              <th className="py-3 pr-6">ךיראת
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#a0a0a0"
                  className="inline "
                  stroke="#a0a0a0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 20h18L12 4z" />
                </svg></th>
              <th className="py-3 pr-6">סוטטס</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <input
                    type="checkbox"
                    class="h-3 w-3 cursor-pointer rounded border-gray-300"
                  />
                </td>
                <td className="pr-6 py-3 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-3 whitespace-nowrap">{item.date}</td>
                <td className="pr-6 py-3 whitespace-nowrap">
                  <span
                    className={`px-3 py-3 rounded-full font-semibold text-xs`}
                  >
                    {item.content2}
                  </span>
                </td>
                <td className="pr-6 py-3 whitespace-nowrap">
                  <div className="flex items-center overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/86.jpg"
                      className="w-8 h-8 rounded-full -ml-6 border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                      className="w-8 h-8 rounded-full  border-2 border-white"
                    />
                  </div>
                </td>
                <td className="pr-6 py-3 whitespace-nowrap">
                  <span
                    className={`px-3 py-3 rounded-full font-semibold text-xs ${
                      item.type == "Active"
                        ? "text-green-600 bg-green-50"
                        : "text-yellow-600 bg-yellow-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="pr-6 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-2xl border-[1px] text-xs ${
                      item.Status1E == "Active"
                        ? "text-black border-zinc-500"
                        : "text-gray-300 border-gray-300"
                    }`}
                  >
                    {item.status1}
                  </span>
                  <span
                    className={`px-2 mx-1 py-1 rounded-full border-[1px] text-xs ${
                      item.type == "Active"
                        ? "text-black border-zinc-500"
                        : "text-gray-300 border-gray-300"
                    }`}
                  >
                    {item.status2}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full border-[1px] text-xs ${
                      item.type == "Active"
                        ? "text-black border-zinc-500"
                        : "text-gray-300 border-gray-300"
                    }`}
                  >
                    {item.status3}
                  </span>
                </td>
                <td className="text-left whitespace-nowrap">
                  <svg
                  onClick={()=>{
                    router.push('/home/InsideEventDetail/1');
                  }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a0a0a0"
                    className="inline"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3" fill="#a0a0a0"></circle>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline"
                    stroke="#a0a0a0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
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

export default Table2;
