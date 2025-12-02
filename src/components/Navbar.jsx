import { NavLink } from "react-router";
import { name } from "~/config";
import { navigation } from "@/constants";
import extractInitials from "@/lib";

const Navbar = () => (
  <header className="header">
    <NavLink
      to="/"
      className="size-10 rounded-lg bg-white items-center justify-center flex font-bold  shadow-md"
    >
      <p className="blue-gradient_text text-2xl">{extractInitials(name)}</p>
    </NavLink>

    <nav className="flex text-lg gap-7 font-medium">
      {navigation
        .filter((item) => item.nav)
        .map(({ name, path }, i) => (
          <NavLink
            key={i}
            to={`/${path}`}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            {name}
          </NavLink>
        ))}
    </nav>
  </header>
);

export default Navbar;
