import Loader from 'react-loader-spinner'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const ProfileDetails = props => {
  const renderProfile = () => {
    const {profileDetails} = props
    const {name, profileImageUrl, shortBio} = profileDetails
    return (
      <div className="profile-details-container">
        <img src={profileImageUrl} alt="profile" className="profile-image" />
        <h1 className="profile-name">{name}</h1>
        <p className="profile-bio">{shortBio}</p>
      </div>
    )
  }

  const renderFailure = () => {
    const {getProfileDetails} = props
    return (
      <div className="profile-failure-container">
        <button
          type="button"
          className="retry-button"
          onClick={getProfileDetails}
        >
          Retry
        </button>
      </div>
    )
  }

  const renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  const {profileApiStatus} = props

  switch (profileApiStatus) {
    case apiStatusConstants.inProgress:
      return renderLoader()
    case apiStatusConstants.success:
      return renderProfile()
    case apiStatusConstants.failure:
      return renderFailure()
    default:
      return null
  }
}
export default ProfileDetails
