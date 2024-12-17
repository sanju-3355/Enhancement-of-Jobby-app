import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link-lg">
              Home
            </Link>
            <Link to="/" className="nav-link-sm">
              <AiFillHome className="small-icons" />
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="nav-link-lg">
              Jobs
            </Link>
            <Link to="/jobs" className="nav-link-sm">
              <BsFillBriefcaseFill className="small-icons" />
            </Link>
          </li>
          <li className="logout-sm-item">
            <button
              type="button"
              onClick={onClickLogout}
              className="logout-sm-btn"
            >
              <FiLogOut className="logout-icon" />
            </button>
          </li>
        </ul>
        <button type="button" onClick={onClickLogout} className="logout-lg-btn">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
