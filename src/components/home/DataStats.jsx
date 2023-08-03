import React from "react";

const DataStats = () => {
  const stats = [
    {
      data: "35K",
      title: "العملاء",
    },
    {
      data: "40+",
      title: "البلدان",
    },
    {
      data: "30M+",
      title: "إجمالي الإيرادات",
    },
  ];
  return (
    <section>
      <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
        {stats.map((item, idx) => (
          <li
            key={idx}
            className="w-[216px] h-[96px] rounded-[8px] border-1 border-[#E6E7E9] bg-[#f7f7f7] px-6 py-4"
          >
            <div className="flex w-full justify-between items-end">
                <p className="text-xs not-italic font-semibold uppercase  text-gray-900 mb-2">{item.title}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </div>
            <h4 className=" text-gray-900 text-lg not-italic font-bold uppercase">
              {item.data}
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DataStats;
