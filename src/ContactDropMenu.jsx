import { Link } from "react-router-dom";

export default function ContactDropMenu() {
  return (
    <div className="dropdown-menu">
      <ul>
        <li>
          <Link to="./contact" className="nav">
            Contact
          </Link>
        </li>
        <li>
          <Link to="./contact/external" className="nav">
            External Contact
          </Link>
        </li>
        <li>Menu 3</li>
      </ul>
    </div>
  );
}
