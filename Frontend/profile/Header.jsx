import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
       <div className="px-4 lg:px-12 my-4">
        <div className="flex items-center justify-between gap-4">
            <h1 className="text-xl font-bold md:font-bold">Hello Hii Kumar Vidarbh sharma</h1>
          <Link to="/add-podcast" className="px-4 py-2 bg-zinc-800 text-white rounded font-bold">Add Podcast</Link>
          
            </div>
            </div>
    );
};

export default Header;