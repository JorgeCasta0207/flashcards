import home from "../assets/home.png";
import person from "../assets/person.png";
import plus from "../assets/plus.png";
import search from "../assets/search.png";
import note from "../assets/note.png";

import { Link } from "react-router-dom";

const MobileNavBar = () => {
  {
    return (
      <div className="sticky w-full z-50 bottom-0 py-3 absolute bg-primary hidden max-lg:block">
        <div
          className="container flex items-center place-content-evenly m-auto" /*style={{ padding-right: ` 5%!important; `, padding-left:` 5%!Important` }}*/
        >
          <div>
            <Link to="/">
              <img
                src={home}
                alt="home"
                className="p-[10px]"
                style={{ width: `70px`, height: `auto` }}
              />
            </Link>
          </div>

          <div className="block ">
            <Link to="/Study">
              <img
                src={search}
                alt="note"
                className="p-[10px]"
                style={{ width: `70px`, height: `auto` }}
              />
            </Link>
          </div>

          <div className="block ">
            <Link to="/Create">
              <img
                src={plus}
                alt="note"
                className="p-[5px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)] w-[100px] h-auto active:translate-y-2 transition-all duration-150"
              />
            </Link>
          </div>

          <div className="block ">
            <Link to="/Edit">
              <img
                src={note}
                alt="note"
                className="p-[10px]"
                style={{ width: `70px`, height: `auto` }}
              />
            </Link>
          </div>

          <div className="block ">
            <Link to="/Profile">
              <img
                src={person}
                alt="person"
                className="p-[10px]"
                style={{ width: `70px`, height: `auto` }}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default MobileNavBar;
