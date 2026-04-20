import { NAV_OPTIONS } from "@/constants/Navbar";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div id="desktop-nav">
        <div>
          <h1>U.MJ_01</h1>
        </div>
        <div>
          <ul>
            {NAV_OPTIONS.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `nav-item nav-item-hover ${isActive ? "nav-item-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button className="bg-primary-color rounded-none text-primary-500 px-6 py-2 border-r-4 border-b-4 border-neutral-color">
            START GAME
          </Button>
        </div>
      </div>
      <div id="mobile-nav">
        <ul>
          {NAV_OPTIONS.map((item) => {
            const Icon = item.logo;
            return (
              <li key={item.id}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `nav-item nav-item-hover ${isActive ? "nav-item-active" : ""}`
                  }
                >
                  <Icon/>
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
