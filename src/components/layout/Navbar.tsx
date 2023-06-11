import { Link, useLocation } from "react-router-dom";
import ContactButton from "../ContactButton";

type linkType = {
  location: string;
  text: string;
};

const NAVBAR_LINKS: linkType[] = [
  { location: "/about", text: "About me" },
  { location: "/projects", text: "Projects" },
  { location: "/experience", text: "Experience" },
  { location: "/skills", text: "Skills" },
  { location: "/contact", text: "Contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  const commonStyles =
    "bg-gradient-to-br from-[#5b37eb] to-[#37eba9] bg-clip-text text-transparent";

  return (
    <nav className="bg-[#1d1d1d] flex flex-row p-4 items-center justify-between text-white sticky top-0">
      <div className="flex flex-row space-x-12 items-center text-[#b4b4b4]">
        <Link
          className={`text-white ${location.pathname === "/" && commonStyles}`}
          to={"/"}
        >
          <h1 className="text-[25px] font-bold">Fernando Nevot</h1>
        </Link>
        {NAVBAR_LINKS.map((link: linkType, i: number) => {
          return (
            <Link
              className={`${
                link.location === location.pathname && commonStyles
              }`}
              key={i}
              to={link.location}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
      <ContactButton />
    </nav>
  );
};

export default Navbar;
