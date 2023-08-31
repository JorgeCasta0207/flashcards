import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const location = useLocation();

  if (
    location.pathname === "/Create" ||
    location.pathname === "/Profile" ||
    location.pathname === "/Study" ||
    location.pathname === "/Edit"
  ) {
    return (
      <> {/*max-lg:bg-mobile*/}
        <div className="max-lg:bg-mobile bg-primary body-wrapper">
          <NavBar />
          <Outlet />
        </div>
        <MobileNavBar />z
      </>
    );
  } else {
    return (
      <>
        {location.pathname === "/" ? (
          <><div className="bg-primary body-wrapper">
            <NavBar />
            <Home />
          </div>
          
          <MobileNavBar /></>
        ) : (
          <div className="bg-primary body-wrapper">
            <NavBar />
            <Outlet />
          </div>
        )}
      </>
    );
  }
}

export default App;
