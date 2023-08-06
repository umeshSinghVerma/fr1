import React from "react";
import Table1 from "../home/Table1";
import DataStats from "../home/DataStats";
import { Connections } from "../home/Connections";
import Link from "next/link";
import Table2 from "../home/Table2";
import PaginationComp from "../Elements/PaginationComp";
import Post from "../home/Post";
import MyForm from "../home/MyForm";
import MyForm2 from "../home/MyForm2";

export default function Page5() {
    return (
        <div className="flex flex-col w-full p-4">
            <div className="flex text-sm mx-auto flex-wrap gap-y-2 gap-x-8 px-4 md:px-8">
                <div className="flex min-[450px]:py-2 min-[450px]:text-sm gap-x-4 border border-gray text-xs text-gray bg-gray-100 items-center p-3 sm:px-2 flex-col sm:flex-row gap-y-2 sm:gap-y-0">
                    <div>
                        המלצות אחרונות
                    </div>
                    <div className="text-gray-400 sm:px-2 sm:border-x">פוסט קרדיטים</div>
                    <div className="text-gray-400">ממתין להמלצה</div>
                    <div className="text-gray-400 sm:px-2 sm:border-x">ממתין להמלצה</div>
                    <div className="text-gray-400">ממתין להמלצה</div>
                </div>
            </div>
            <div className="pt-2">
                <MyForm />
            </div>
        </div>
    );
}
