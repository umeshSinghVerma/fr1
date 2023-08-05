'use client'
import React, { useState } from 'react'
import SideNav from './SideNav';
import { SidenavContent } from './SidenavContent';

export default function SidenavUsable() {
    const [sidenavOpen, setSidenavOpen] = useState(false);

    const handleSidenavToggle = () => {
        setSidenavOpen(!sidenavOpen);
    };

    const handleSidenavClose = () => {
        setSidenavOpen(false);
    };
    return (
        <div className="flex">
            <button
                className="fixed top-5 left-5 p-2 bg-gray-500 text-white"
                onClick={handleSidenavToggle}
            >
                Open Sidenav
            </button>

            <SideNav isOpen={sidenavOpen} onClose={handleSidenavClose}>
                <SidenavContent />
            </SideNav>

        </div>
    )
}
