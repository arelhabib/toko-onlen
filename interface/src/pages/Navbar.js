import React from "react";
import { Link } from "react-router-dom";
import { BsBox, BsGrid, BsPeople, BsCardChecklist } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="col-3 sidebar">
        <div className="d-flex flex-column flex-shrink-0 p-4  pt-5">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span className="fs-4 pb-3">Sidebar</span>
          </Link>

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link icon-link icon-link-hover">
                <BsGrid className="fs-3 me-2"></BsGrid> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link icon-link icon-link-hover">
                <BsBox className="fs-3 me-2"></BsBox> Product
              </Link>
            </li>
            <li>
              <Link to="/category" className="nav-link icon-link icon-link-hover">
                <BsCardChecklist className="fs-3 me-2"></BsCardChecklist> Category
              </Link>
            </li>
            <li>
              <Link to="/users" className="nav-link icon-link icon-link-hover">
                <BsPeople className="fs-3 me-2"></BsPeople> User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
