import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 p-4">
      <div className="container text-xl font-semibold mx-auto flex justify-between h-12 items-center">
        <div className="flex  items-center space-x-8">
          {/* <img src="/logo.png" alt="redBus" className="h-8" /> */}
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white">Bus Tickets</a></li>
              <li><a href="#" className="text-white">Train Tickets</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-10 text-white">
          <a href="#">Help</a>
          <a href="#">English</a>
          <a href="#">Account</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
