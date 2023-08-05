import React from "react";

const MyForm = () => {
  return (
    <section>
      <div className="w-4/5 mx-auto flex flex-col items-center justify-center sm:justify-start">
        <div className="w-full flex flex-col my-8 sm:my-4 gap-y-4 items-center sm:flex-row justify-start gap-x-8">
          <div className="max-w-md px-4 sm:my-12">
            <label for="input-1" className="block font-bold py-2 text-gray-500">
              התחל להקליד
            </label>
            <div
              dir="ltr"
              className="flex items-center text-gray-400 border rounded-md"
            >
              <input
                type="text"
                placeholder="התחל להקליד"
                id="input-1"
                className="w-full p-2.5 ml-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="max-w-md px-4 sm:my-12">
            <label for="input-2" className="block font-bold py-2 text-gray-500">
              התחל להקליד
            </label>
            <div
              dir="ltr"
              className="flex items-center text-gray-400 border rounded-md"
            >
              <input
                type="text"
                placeholder="התחל להקליד"
                id="input-2"
                className="w-full p-2.5 ml-2 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-t border-b border-gray-300 justify-center">
          <div className="w-full flex flex-col-reverse items-center sm:flex-row justify-center sm:justify-between gap-x-8">
            <div className="max-w-md px-4 my-8">
              <label
                for="input-3"
                className="block font-bold py-2 text-gray-500"
              >
                התחל להקליד
              </label>
              <div
                dir="ltr"
                className="flex flex-col gap-y-4 sm:flex-row items-center text-gray-400 gap-x-4"
              >
                <input
                  type="text"
                  placeholder="התחל להקליד"
                  id="input-3"
                  className="w-full p-2.5 ml-2 bg-transparent rounded-md border outline-none"
                />
                <input
                  type="text"
                  placeholder="התחל להקליד"
                  className="w-full p-2.5 ml-2 bg-transparent rounded-md border outline-none"
                />
              </div>
            </div>
            <div className="max-w-md px-4 my-8">
              <div className="max-w-md px-4 mx-auto">
                <label
                  for="input-4"
                  className="block font-bold py-2 text-gray-500"
                >
                  התחל להקלי
                </label>
                <div
                  dir="ltr"
                  className="flex items-center text-gray-400 border rounded-md"
                >
                  <input
                    type="text"
                    placeholder="www.example.com"
                    id="input-4"
                    className="w-full p-2.5 ml-2 bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center sm:flex-row justify-center sm:justify-start gap-x-8">
            <div className="text-center sm:text-right w-full my-8">
              <label
                for="input-3"
                className="block font-bold py-2 pl-32 text-gray-500"
              >
                התחל להקליד
              </label>
              <div
                dir="ltr"
                className="flex flex-col-reverse min-[1000px]:flex-row items-center sm:items-end justify-center sm:justify-between text-gray-400 gap-y-12 min-[1000px]:gap-x-4"
              >
                <div className="max-w-md flex flex-col-reverse sm:flex-row gap-x-4 gap-y-4">
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-[#b0b0b0] bg-[#f7f7f7] rounded-lg">
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
                    להקליד
                  </button>
                  <input
                    type="text"
                    placeholder="התחל להקליד"
                    className="w-full p-2.5 bg-transparent rounded-md border outline-none"
                  />
                </div>
                <div className="max-w-md flex flex-col-reverse sm:flex-row gap-x-4 gap-y-4">
                  <div className="w-full flex items-center text-gray-400 border rounded-md">
                    <div className="px-4 py-2 rounded-l-md bg-white border-r">
                      050
                    </div>
                    <input
                      type="text"
                      placeholder="התחל להקליד"
                      id="input-3"
                      className="w-full p-2.5 bg-transparent rounded-md outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="התחל להקליד"
                    className="w-full p-2.5 bg-transparent rounded-md border outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap my-4 items-end flex-row justify-center sm:justify-start gap-x-8">
          <div className="max-w-md px-4 my-8">
            <label for="input-2" className="block font-bold py-2 text-gray-500">
              התחל להקליד
            </label>
            <div
              dir="ltr"
              className="flex items-center text-gray-400 border rounded-md"
            >
              <input
                type="text"
                placeholder="התחל להקליד"
                id="input-2"
                className="w-full p-2.5 ml-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="max-w-md px-4 my-8">
            <label for="input-2" className="block font-bold py-2 text-gray-500">
              התחל להקליד
            </label>
            <div
              dir="ltr"
              className="flex items-center text-gray-400 border rounded-md"
            >
              <input
                type="password"
                placeholder="התחל להקליד"
                id="input-2"
                className="w-full p-2.5 ml-2 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="max-w-md px-4 my-8">
            <button className="flex items-center gap-2 px-8 py-2 text-[#b0b0b0] bg-[#f7f7f7] rounded-lg">
              להקלידהקליד
            </button>
          </div>
          <div className="flex items-end gap-x-4 max-w-md xl:mr-auto px-4 my-8">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              className="w-16 h-16 rounded-2xl"
            />
            <button className="flex items-center gap-2 px-8 py-2 text-[#b0b0b0] bg-[#f7f7f7] rounded-lg">
              להקלידהקליד
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyForm;
