import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  Nav,
  NavItem,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/" passHref>
          <NavLink>{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <>
                <NavItem>
                  <Link href="/signin" passHref>
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup" passHref>
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </>
            )}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
