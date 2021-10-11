import { useState } from 'react'

const Header = ({ heading, paragraph, children }) => {
  const [state] = useState({
    video: '/assets/videos/header.mp4',
    poster: '/assets/images/screen.png',
    logo: '/assets/images/logo.png'
  })
  return (
    <div>
      <div className='header'>
        {/* 
          <div className="container pr">
              <div className="header__logo">

              </div>
          </div>
      */}
        <div className='header__video'>
          <video
            src={state.video}
            autoPlay
            loop
            muted
            poster={state.poster}
          ></video>
        </div>
      </div>

      {children}
    </div>
  )
}

export default Header
