import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Footer({ title, logo }) {
  return (
    <footer className="flex items-center my-20 relative">
      <div className="flex flex-col items-start flex-1">
        <img
          className="h-24 w-24 object-contain"
          src={logo}
          alt="Company logo"
        />
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <nav className="flex gap-8">
        <ul className="flex items-start flex-col gap-4 text-lg capitalize">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <ul className="flex items-start flex-col gap-4 text-lg capitalize">
          <li>Terms of use</li>
          <li>Support Team</li>
          <li>Job offers</li>
        </ul>
      </nav>
    </footer>
  );
}
