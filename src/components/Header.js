import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return <>
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="meal-block">
        <Link className="meal-item" to="/meal">Explore</Link>
      </div>
      <div className='auth-buttons'>
        <Link className="sign-btn" to="/sign-up">Sign Up</Link>
        <Link className="sign-btn" to="/sign-in">Sign In</Link>
      </div>
    </header>
  </>
}

export default Header;
