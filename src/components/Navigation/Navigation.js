import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <div className="row navigaton-section">
      <ul>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "solid 2px #3f51b5" : "",
                background: isActive ? "#EEEEEE" : "",
              };
            }}
            to={`/total`}
          >
            <i class="fas fa-chart-pie" />
            TOTAL
          </NavLink>{" "}
        </li>

        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "solid 2px #3f51b5" : "",
                background: isActive ? "#EEEEEE" : "",
              };
            }}
            to={`/maths`}
          >
            <i class="fa-sharp fa-solid fa-plus" />
            MATHS
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "solid 2px #3f51b5" : "",
                background: isActive ? "#EEEEEE" : "",
              };
            }}
            to={`/chemistry`}
          >
            <i className="fas fa-flask" />
            CHEMISTRY
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "solid 2px #3f51b5" : "",
                background: isActive ? "#EEEEEE" : "",
              };
            }}
            to={`/physics`}
          >
            <i className="fab fa-react" />
            PHYSICS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
