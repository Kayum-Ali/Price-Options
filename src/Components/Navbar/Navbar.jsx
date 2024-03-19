import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1  } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen]=useState(false)

    const routes = [
        { id: 1, path: "/", name: "home" },
        { id: 2, path: "/about", name: "about" },
        { id: 3, path: "/services", name: "services" },
        { id: 4, path: "/products", name: "products" },
        { id: 5, path: "/contact", name: "contact" }
    ];


    return (
        <nav>
           <div className="md:hidden text-xl" onClick={()=> setOpen(!open)}>
            {
                open === true ? <AiOutlineClose ></AiOutlineClose>
                 :  <HiMenuAlt1 className=" "></HiMenuAlt1>
            }
          
           </div>
            <ul className={`md:flex  absolute md:static duration-1000 p-3 bg-lime-400 text-black ${open ? 'top-5 px-6' : 'px-6 -top-60'}`}>
                {
                    routes.map(route => <Link  key={route.id} route={route}></Link>)
                }

            </ul>

        </nav>
    );
};

export default Navbar;