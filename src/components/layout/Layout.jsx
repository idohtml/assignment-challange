import Header from "./Header";
import Footer from "./Footer";

// importing image logo
import Logo from "../../assets/logo.png";

// eslint-disable-next-line react/prop-types
export default function Layout({ children, className }) {
  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      <Header title={"Aqua Voyage"} logo={Logo} />
      <main>{children}</main>
      <Footer title={"Aqua Voyage"} logo={Logo} />
    </div>
  );
}
