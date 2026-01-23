import React from "react";
import SideBar from "@/component/sidebarfolder/SideBar";
import RightBar from "@/component/rightside/RightBar";

export default function MovieLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-black">
            <SideBar />
            <main className="flex-1 overflow-y-auto no-scrollbar">
                <div className="px-8">
                    {children}
                </div>
            </main>
            <RightBar />
        </div>
    );
}
