import React from "react";

const PostModal = () => {
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
      desc: "ממליצים ממליצים ממליצים!! אלון היקר שלנו! הבחירה הכי טובה שעשינו בכל החתונה הזו!! תודה לך! תודה על הסבלנות, הצחוקים ושהכלת את כל השגעונות שלנו! היית מדויק, הבנת בדיוק מה אנחנו אוהבים והוצאת לנו תמונות של מינימום דוגמנים! לא סתם קוראים לך Unique… אתה באמת מיוחד! מספר אחד! התאהבנו בכל הצוות שלך ובמיוחד בדימה האלוף שהצחיק והתחבב על כולם. מחכים בקוצר רוח לכל התמונות והסרטונים! תהיה בטוח שניפגש בעוד אירועים! אוהבים אותך המון",
      href: "javascript:void(0)",
    },
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
      desc: "ממליצים ממליצים ממליצים!! אלון היקר שלנו! הבחירה הכי טובה שעשינו בכל החתונה הזו!! תודה לך! תודה על הסבלנות, הצחוקים ושהכלת את כל השגעונות שלנו! היית מדויק, הבנת בדיוק מה אנחנו אוהבים והוצאת לנו תמונות של מינימום דוגמנים! לא סתם קוראים לך Unique… אתה באמת מיוחד! מספר אחד! התאהבנו בכל הצוות שלך ובמיוחד בדימה האלוף שהצחיק והתחבב על כולם. מחכים בקוצר רוח לכל התמונות והסרטונים! תהיה בטוח שניפגש בעוד אירועים! אוהבים אותך המון",
      href: "javascript:void(0)",
    },
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
      desc: "ממליצים ממליצים ממליצים!! אלון היקר שלנו! הבחירה הכי טובה שעשינו בכל החתונה הזו!! תודה לך! תודה על הסבלנות, הצחוקים ושהכלת את כל השגעונות שלנו! היית מדויק, הבנת בדיוק מה אנחנו אוהבים והוצאת לנו תמונות של מינימום דוגמנים! לא סתם קוראים לך Unique… אתה באמת מיוחד! מספר אחד! התאהבנו בכל הצוות שלך ובמיוחד בדימה האלוף שהצחיק והתחבב על כולם. מחכים בקוצר רוח לכל התמונות והסרטונים! תהיה בטוח שניפגש בעוד אירועים! אוהבים אותך המון",
      href: "javascript:void(0)",
    },
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
      desc: "ממליצים ממליצים ממליצים!! אלון היקר שלנו! הבחירה הכי טובה שעשינו בכל החתונה הזו!! תודה לך! תודה על הסבלנות, הצחוקים ושהכלת את כל השגעונות שלנו! היית מדויק, הבנת בדיוק מה אנחנו אוהבים והוצאת לנו תמונות של מינימום דוגמנים! לא סתם קוראים לך Unique… אתה באמת מיוחד! מספר אחד! התאהבנו בכל הצוות שלך ובמיוחד בדימה האלוף שהצחיק והתחבב על כולם. מחכים בקוצר רוח לכל התמונות והסרטונים! תהיה בטוח שניפגש בעוד אירועים! אוהבים אותך המון",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className=" overflow-y-auto" style={{maxHeight:"400px"}}>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-2">
          <ul className="flex flex-col gap-4">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="flex shadow-md p-3 items-center md:items-start md:flex-row md:justify-between gap-x-4  rounded-md"
                style={{ flexDirection: 'column' }}
              >
                <div className="flex w-full justify-between gap-x-4 items-center" style={{ fontSize: '10px' }}>
                  <div className="flex gap-2">
                    <span className="font-normal bg-[#DEF1FF] text-[#181894] rounded-xl px-2">
                      אביגדור אירועים
                    </span>
                    <span className="font-bold">12.4.2023</span>
                  </div>
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
                </div>
                <div className="flex w-full text-xs flex-col mt-4 gap-y-2 min-[480px]:flex-row gap-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="w-full space-y-3">
                    <p style={{ maxWidth: '350px' }}>{item.desc}</p>
                  </div>
                </div>

                <div className="flex mr-auto items-end gap-x-4 justify-end text-xs ">
                  <div className="flex items-center gap-x-4 justify-end rounded-full border border-gray-100 py-1 px-2">
                    <span className="text-[#8f8f8f]">תגיות</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7 7H7.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-x-4 justify-end rounded-full border border-gray-100 py-1 px-2">
                    <span className="text-[#8f8f8f]">שיתוף</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.58984 13.51L15.4198 17.49" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.4098 6.51001L8.58984 10.49" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
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

export default PostModal;
