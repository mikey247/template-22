// import techsudioIcon from "./techstudio-logo.svg";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className={classes.leftnav}>
          <a href="/">
            <h4>logo</h4>
          </a>
          <div>
            <p id="tsd">TechStudio Academy</p>
            <p>A strategic dots digital solutions company</p>
          </div>
        </div>
        <div className={classes.options}>
          <Link to={"/"}>Download package</Link>
          <Link to={"/"}>Login</Link>
          <Link to={"/"}>Register</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
