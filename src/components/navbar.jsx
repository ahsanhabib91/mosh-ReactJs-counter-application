import React, { Component } from "react";

/**
 * Stateless Functional Component
 * Cannot call LifeCycle Hooks funciton in Functional Components
 */

// const Navbar = props => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//         <span className="badge badge-pill badge-secondary">
//           {props.totalCounters}
//         </span>
//       </a>
//     </nav>
//   );
// };

// OR with Object destructuring
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
