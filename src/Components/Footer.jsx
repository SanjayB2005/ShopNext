import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
            <span>E-Kart&nbsp; &copy; &nbsp;</span>
            <span>{new Date().getFullYear()}</span> 
            <span>,&nbsp;All Rights Reserved</span>
        </div>
  )
}

export default Footer