import { NavLink } from "react-router-dom";
import { pages } from "../pages/pages";

import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledNavLink = styled(NavLink)`
  &::before {
    background: ${props => props.color};
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.bg};
`;

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [mobileNav]);

  const openMobileNav = () => setMobileNav(!mobileNav);
  return (
    <nav className="md:flex-col text-white px-8 pt-5 pb-7 flex justify-between items-center border-b border-b-[var(--border-color)]">
      <div className="text-3xl font-anton">THE PLANETS</div>
      <ul className="hidden md:flex gap-8 md:mt-10 ">
        {pages.map((page, i) => (
          <li key={i}>
            <StyledNavLink
              to={page.name.toLowerCase()}
              color={page.color}
              className={"menu-link font-spartan font-bold"}
            >
              {page.name}
            </StyledNavLink>
          </li>
        ))}
      </ul>
      <div>
        <svg
          onClick={openMobileNav}
          className="md:hidden cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
        >
          <rect width="24" height="3" fill="white" />
          <rect y="7" width="24" height="3" fill="white" />
          <rect y="14" width="24" height="3" fill="white" />
        </svg>
        <div
          className={`${
            mobileNav ? "block" : "hidden"
          } fixed bg-[#070724] w-screen h-screen left-0 top-[85px] z-10`}
        >
          <ul className="pt-3">
            {pages.map((page, i) => (
              <li key={i}>
                <NavLink
                  onClick={openMobileNav}
                  to={page.name.toLowerCase()}
                  className={"font-spartan font-bold"}
                >
                  <div className="px-6 py-5 flex justify-between">
                    <div className="flex  items-center gap-4">
                      <Circle bg={page.color}></Circle>
                      <span className="uppercase">{page.name}</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
                    </svg>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
