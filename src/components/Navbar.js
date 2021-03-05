import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import logoOne from "../images/logo.png";

import AuthService from "../services/auth.service";

const Nav = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;

  img {
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.i`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Nav>
      <Logo to="/">
        <img src={logoOne} alt="" />
      </Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      {/* <NavMenu>
        {currentUser && <NavMenuLinks to={"/user"}>User</NavMenuLinks>}
      </NavMenu> */}

      <NavMenu>
        {currentUser ? (
          <React.Fragment>
            <NavMenuLinks to={"/profile"}>
              {currentUser.firstName + " " + currentUser.lastName}
            </NavMenuLinks>
            <NavBtn>
              <Button to="/login" primary="true" onClick={logOut}>
                Logout
              </Button>
            </NavBtn>
          </React.Fragment>
        ) : (
          <NavMenuLinks>
            <React.Fragment>
              <NavBtn>
                <Button to="/login" primary="true">
                  Login
                </Button>
              </NavBtn>
            </React.Fragment>
          </NavMenuLinks>
        )}
      </NavMenu>

      {/* <NavBtn>
        <Button to="/login" primary="true">
          Login
        </Button>
      </NavBtn> */}
    </Nav>
  );
};

export default Navbar;
