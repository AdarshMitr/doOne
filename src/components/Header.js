import React from 'react'
import logo from "../Img/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="doOne logo" />
        <div className="date">
          Today :{new Date().getDate()}/{new Date().getMonth() + 1}/
          {new Date().getFullYear()}
        </div>
       
      </div>
  )
}

export default Header;