import {Redirect, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Home = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <div className="home-container">
        <Header />
        <div className="home-page">
          <div className="content">
            <h1 className="heading">Find The Job That Fits Your Life</h1>
            <p className="text">
              Millions of people are searching for jobs, salary information,
              company reviews. Find the job that fits your abilities and
              potential.
            </p>
            <Link to="/jobs">
              <button type="button" className="button">
                Find Jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
