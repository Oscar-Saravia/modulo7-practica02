import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { username, email } = useSelector((state) => state.form.formData);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/default">Default</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/login">LoginForm</Link>
        </li>
        {username && email && (
          <li>
            <span>{username}</span> | <span>{email}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
