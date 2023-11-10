import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { NavContext } from "../context/NavContext";

const links = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "tours",
    name: "Tours",
  },
  {
    path: "discography",
    name: "Discography",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const { setIsOpen } = useContext(NavContext);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1310px)",
  });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            smooth={!isDesktop ? false : true}
            spy
            offset={-50}
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
