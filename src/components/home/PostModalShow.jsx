import React from "react";

const PostModalShow = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "לפני 59 דקות",
      desc: "العميل مهم جدا ، العميل سيتبعه. حتى الواجب المنزلي ، يحتاج اللاعبون إلى موظفين مختلفين ، لأنهم طاهرون من الفم.",
      href: "javascript:void(0)",
    }
  ];
  return (
    <section className="w-full bg-white">
      <div className="max-w-screen-xl h-full mx-auto text-gray-600">
        <div>
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-1">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-x-4  rounded-md"
              >
                <div>
                  <div className="flex gap-x-4 items-center" style={{ fontSize: '10px' }}>
                    <span className="font-normal bg-[#eaf4f4] rounded-xl px-2">
                      לפני 59 דקות
                    </span>
                    <span className="font-bold">12.4.22</span>
                  </div>
                  <div className="flex flex-col mt-4 gap-y-2 min-[480px]:flex-row gap-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="space-y-3">
                      <p className="w-80">{item.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-left flex flex-col justify-between h-full">
                  <div className="flex items-center gap-x-6 justify-end">
                    <div className="flex-none w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-end gap-x-4 justify-end">
                    <div className="flex items-center gap-x-4 justify-end">
                      <span className="text-[#8f8f8f]">معرفة</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8f8f8f"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </div>
                    <div className="flex items-center gap-x-4 justify-end">
                      <span className="text-[#8f8f8f]">معرفة</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8f8f8f"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PostModalShow;
