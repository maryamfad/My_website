import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Maryam Fadaee</a>
      <ul>
        <li className="active">
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
      </ul>
      <ul className="authentication">
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
