import Header from "@/components/Elements/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/home/SideBar";

export default function DashboardLayout(props) {
    return (
        <div className="w-screen h-screen flex">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="w-full"><Header /></div>
                <div className="flex-grow">
                    {props.children}
                    {props.new_event}
                </div>
                <div className="w-full"><Footer/></div>

            </div>

        </div>
    )
}