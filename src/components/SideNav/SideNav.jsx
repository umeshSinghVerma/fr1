import React, { useState, useEffect } from 'react';

const SideNav = ({ isOpen, onClose, children }) => {
  const [sideNavOpen, setSideNavOpen] = useState(isOpen);

  useEffect(() => {
    setSideNavOpen(isOpen);
  }, [isOpen]);

  const handleSideNavClick = (event) => {
    event.stopPropagation();
  };

  const handleOverlayClick = () => {
    setSideNavOpen(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition-transform ${
        sideNavOpen ? 'transform-none' : '-translate-x-full'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`fixed h-[98%] w-64 rounded-lg m-2 bg-white border border-gray-300 left-0 z-50 transform transition-transform ${
          sideNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={handleSideNavClick}
      >
        <button
          className="absolute top-2 left-2 text-black"
          onClick={handleOverlayClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default SideNav;
