import React, { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, onClose, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(isOpen);

  useEffect(() => {
    setSidebarOpen(isOpen);
  }, [isOpen]);

  const handleSidebarClick = (event) => {
    event.stopPropagation();
  };

  const handleOverlayClick = () => {
    setSidebarOpen(false);
    onClose();
  };

  return (
    <div
      className={`fixed  inset-0 z-40 transition-transform ${
        sidebarOpen ? 'transform-none' : '-translate-x-full'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`fixed h-[98%] w-64 rounded-lg m-2 bg-white border border-gray-300 left-0 z-50 transform transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={handleSidebarClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
