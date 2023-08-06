import React from "react";

const DataStats = () => {
  const stats = [
    {
      data: "35K",
      title: "العملاء",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clip-path="url(#clip0_3_963)">
            <path
              d="M12 13.5L13.7175 11.7825L10.0575 8.1225L7.0575 11.1225L1.5 5.5575L2.5575 4.5L7.0575 9L10.0575 6L14.7825 10.7175L16.5 9V13.5H12Z"
              fill="#DD425A"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_963">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      percentage:"12.4%"
    },
    {
      data: "40+",
      title: "البلدان",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clip-path="url(#clip0_3_963)">
            <path
              d="M12 13.5L13.7175 11.7825L10.0575 8.1225L7.0575 11.1225L1.5 5.5575L2.5575 4.5L7.0575 9L10.0575 6L14.7825 10.7175L16.5 9V13.5H12Z"
              fill="#DD425A"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_963">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      percentage:"12.4%"
    },
    {
      data: "30M+",
      title: "إجمالي الإيرادات",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clip-path="url(#clip0_3_963)">
            <path
              d="M12 13.5L13.7175 11.7825L10.0575 8.1225L7.0575 11.1225L1.5 5.5575L2.5575 4.5L7.0575 9L10.0575 6L14.7825 10.7175L16.5 9V13.5H12Z"
              fill="#DD425A"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_963">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      percentage:"12.4%"
    },
  ];
  return (
    <section>
      <ul className="flex flex-col pr-10 gap-4 items-center justify-center sm:flex-row">
        {stats.map((item, idx) => (
          <li
            key={idx}
            className="w-[216px] flex flex-col justify-between h-[96px] rounded-[8px] border-1 border-[#E6E7E9] bg-[#f7f7f7] px-6 py-4"
          >
            <div className="flex w-full justify-between items-end">
              <p className="text-xs not-italic font-semibold uppercase  text-gray-900 mb-2">
                {item.title}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </div>
            <div className="flex justify-between items-end">
              <h4 className=" text-gray-900 text-lg not-italic font-bold uppercase">
                {item.data}
              </h4>
              <div className="flex gap-x-2 text-[10px] text-red-600">
                <span>{item.icon}</span>
                <span>{item.percentage}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DataStats;
