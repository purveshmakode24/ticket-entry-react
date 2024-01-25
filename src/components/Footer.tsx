import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="text-center" style={{padding: '20px'}}>
      <h6 className='mb-1'>Created by Purvesh Makode.</h6>
      <a href='https://ticket-entry-backend.vercel.app/'>Link</a> to the Backend APIs. | 
      Links to Github Repos: &nbsp; 
      <a href=' https://github.com/purveshmakode24/ticket-entry-react'>Frontend</a> &nbsp;
      <a href='https://github.com/purveshmakode24/ticket-entry-backend'>Backend</a>
    </footer>
  )
}

export default Footer;