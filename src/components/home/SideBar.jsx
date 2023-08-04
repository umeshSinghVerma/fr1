"use client";
import { useEffect, useRef, useState } from "react";

const Sidebar = () => {
  const navigation = [
    {
      href: "javascript:void(0)",
      name: "ملخص",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
      ),
    },
    {
      href: "javascript:void(0)",
      name: "ادماج",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
          />
        </svg>
      ),
    },
    {
      href: "javascript:void(0)",
      name: "الخطط",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      ),
    },
    {
      href: "javascript:void(0)",
      name: "المعاملات",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
    },
  ];

  const profileRef = useRef();

  const [isProfileActive, setIsProfileActive] = useState(false);

  useEffect(() => {
    const handleProfile = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setIsProfileActive(false);
    };
    document.addEventListener("click", handleProfile);
  }, []);

  return (
    <>
      <nav className="fixed top-0 right-0 h-full border-l bg-gray-100 sm:w-72 w-16 py-8 sm:px-4">
        <div class="flex flex-col h-full sm:px-4">
          <div className="h-20 flex flex-col items-center pr-2">
            <div
              ref={profileRef}
              onClick={() => setIsProfileActive(!isProfileActive)}
              className="w-full border-[1px] border-gray-100 cursor-pointer rounded-3xl py-2 sm:px-4 flex items-center gap-x-4 hover:bg-white hover:border-[1px]  hover:border-black active:bg-gray-150"
            >
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="hidden sm:block block text-gray-700 text-sm font-semibold">
                  اليفيكا توني
                </span>
                <span className="hidden sm:block block mt-px text-gray-600 text-xs">
                  خطة هواية
                </span>
              </div>
            </div>
            {isProfileActive ? (
              <div className="z-10 top-20 left-0 w-full rounded-lg bg-white shadow-md border text-sm text-gray-600">
                <div className="p-4 text-right">
                  <button className="block w-full p-2 text-right rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                    تسجيل خروج
                  </button>
                  <a
                    href="javascript:void(0)"
                    className="block border-t w-full p-2 rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                  >
                    أضف حساب آخر
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <ul className="text-md font-medium flex-1 mt-4 pr-4 sm:px-2">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-x-2 text-gray-600 sm:px-8 py-3 rounded-lg  hover:bg-gray-300 active:bg-gray-100 duration-150"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    <span className="hidden sm:inline">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:block w-full bg-gray-300 rounded-xl mt-28 py-8 px-4">
            <span className="block mt-px text-gray-600 text-xs">خطة هواية</span>
            <span className="block text-gray-700 text-md font-semibold mb-4">
              اليفيكا تونيفيكا تونيفيكا تونيفيكا تونيفيكا توني
            </span>
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              className="w-8 h-8 rounded-full mb-4"
            />
            <button className="px-4 py-2 w-full text-white bg-gray-600 rounded-lg">
              اضغط هنا
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
