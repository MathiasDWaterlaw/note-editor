import "./NavigationBar.css";
import { Link } from "react-router-dom";

function NavigationBar({ icons }) {
  return (
    <nav className='NavigationBar'>
      <ul>
        <li>
          <Link to='/' className='nav-item'>
            {icons[0]}
          </Link>
        </li>
        <li>
          <Link to='/note-editor' className='nav-item'>
            {icons[1]}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
