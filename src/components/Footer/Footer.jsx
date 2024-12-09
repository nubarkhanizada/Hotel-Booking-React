import "./footer.scss";
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="containerDefault">
        <div className="footer">
          <p>© Roomify | {new Date().getFullYear()}, All Right Reserved</p>
          <p>Website by <span>Nubar Khanizada</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer