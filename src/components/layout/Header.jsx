import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Header({ title, logo }) {
  const Links = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="h-24 w-24 object-contain"
          src={logo}
          alt="Company logo"
        />
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <ul className="flex gap-4 text-lg capitalize">
        {Links.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.title}
          </Link>
        ))}
      </ul>
    </header>
  );
}
