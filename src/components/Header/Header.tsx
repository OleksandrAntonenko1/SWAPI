import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import CharacterSearch from "components/CharacterSearch";
import ThemeSwitch from "../ThemeSwitch";

const Header = () => (
  <div className="bg-base-200">
    <div className="container mx-auto navbar my-1">
      <div className="flex-1">
        <Link to={ROUTES.HOME} className="btn btn-ghost normal-case text-xl">
          StarWars
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <div className="form-control">
              <ThemeSwitch />
            </div>
          </li>

          <li>
            <div className="form-control">
              <CharacterSearch />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
