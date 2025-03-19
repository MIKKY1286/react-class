import { Link } from "react-router-dom";
import Button from "./Button";
import Hero from "./Hero";
import "./navbar.css";
const Navbar = () => {
  const signUp = () => {
    alert("signingh up...");
  };

  return (
    <div className="navbar">
      <h1>Logo</h1>
      <div style={styles.menuItems}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </div>
      <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
        <Link style={styles.button} to='/sign-up'>Sign up</Link>
        <Link style={styles.button} to='/login'>Login</Link>
      </div>
    </div>
  );
};

const styles = {
  menuItems: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  button: {},
};

export default Navbar;
