import React from "react";
import MultipleSelector from "../Elements/MultipleSelector";

const Table3 = () => {
  const tableItems = [
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      stats: "2345622",
      status: "WedReviews",
      status4: "אביגדור אירועים",
      status5: "אביגדור אירועים",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      stats: "2345622",
      status: "WedReviews",
      status4: "אביגדור אירועים",
      status5: "אביגדור אירועים",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      stats: "2345622",
      status: "WedReviews",
      status4: "אביגדור אירועים",
      status5: "אביגדור אירועים",
      content2: "אביגדור אירועים",
      plan: "اشتراك سنوي",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      stats: "2345622",
      status: "WedReviews",
      status4: "אביגדור אירועים",
      status5: "אביגדור אירועים",
      content2: "אביגדור אירועים",
      plan: "اشتراك شهري",
    },
    {
      name: "יסויו תינד לש הנותחה",
      date: "10.03.23",
      stats: "2345622",
      status: "WedReviews",
      status4: "אביגדור אירועים",
      status5: "אביגדור אירועים",
      content2: "אביגדור אירועים",
      plan: "اشتراك سنوي",
    },
  ];
  return (
    <div className="w-full px-4 md:px-8">
      <div className="mt-2 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-right">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6"></th>
              <th className="py-3 pr-6">עוריאה םש</th>
              <th className="py-3 pr-6">עוריאה םש</th>
              <th className="py-3 pr-6">םינגראמה</th>
              <th className=" gap-x-2 py-3 pr-6">עוריאה םוקימ</th>
              <th className="py-3 pr-6">ךיראת</th>
              <th className="py-3 pr-6">ךיראת</th>
              <th className="py-3 pr-6">סוטטס</th>
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
                <td className="pr-6 py-3 whitespace-nowrap">{item.stats}</td>
                <td className="pr-6 py-3 whitespace-nowrap">{item.content2}</td>
                <td className="pr-6 py-3 whitespace-nowrap">
                  <span
                    className={`px-3 py-3 rounded-full text-xs text-[#5178a3] bg-[#eaf4f4]`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="pr-6 py-3 whitespace-nowrap">
                  <div className="border rounded-md ">
                    <select className=" bg-transparent  outline-none rounded-lg">
                      <option>אביגדור</option>
                      <option>אביגדור</option>
                      <option>אביגדור</option>
                    </select>
                  </div>
                </td>
                <td className="pr-6 py-3 whitespace-nowrap">
                  <div className="border rounded-md ">
                    <select className=" bg-transparent  outline-none rounded-lg">
                      <option>אביגביגדור</option>
                      <option>אביגדורביג</option>
                      <option>אביגדורביג</option>
                    </select>
                  </div>
                </td>
                <td className="pr-2 py-3 whitespace-nowrap">
                <span
                    className={`px-4 py-1 border text-xs rounded-sm
                    `}
                  >
                    {item.status5}
                  </span>
                </td>
                <td className="text-left whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs text-[#678034] bg-[#fff0fd]
                    `}
                  >
                    {item.status4}
                  </span>
                </td>
                <td className="text-left whitespace-nowrap">
                  <div className="flex-none w-8 h-6 bg-[#f4f4f4] rounded-2xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="inline"
                      stroke="#a0a0a0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table3;
