'use client'
import Header from "@/components/Elements/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/home/SideBar";
import { ContentWidthContext } from "@/contexts/ContentWidthContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function DashboardLayout(props) {
    const HeaderRef = useRef(null);
    const {contentWidth,setContentWidth} =useContext(ContentWidthContext);

    // useEffect(() => {
    //     const divElement = HeaderRef.current;
    //     const resizeObserver = new ResizeObserver(entries => {
    //         for (const entry of entries) {
    //             setContentWidth(entry.contentRect.width)
    //         }
    //     });

    //     if (divElement) {
    //         resizeObserver.observe(divElement);
    //     }

    //     return () => {
    //         resizeObserver.disconnect();
    //     };
    // }, []);
    return (
        <div className="w-screen h-screen flex overflow-auto">
            <div  ref={HeaderRef}>
                <Sidebar />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="w-full"><Header/></div>
                    <div id="content"  className="flex-grow bg-yellow-50 w-[calc(100vw-64px)]  sm:w-[calc(100vw-290px)]">
                        {props.children}
                        {props.new_event}
                    </div>
                <div className="w-full"><Footer /></div>
            </div>
        </div>
    )
}