import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';



const Navbar = () => {

  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className='navbar-link' to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className='navbar-link' to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className='navbar-link' to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink className='navbar-link' to="/contacts">Contact</NavLink>
          </li>
          <li>
            <NavLink className='navbar-link' to="/contacts">Test Yourself</NavLink>
          </li>
          <li>
            <NavLink to="">login</NavLink>
          </li>
        
        
      </ul>
    </div>
      
    </Nav>

  )
};
const Nav = styled.nav`
.navbar-list {
  display: flex;
  gap: 4.8rem;
  align-items:center;

  li {
    list-style: none;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
}
.login {
  background-color: #324AB2; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  text-align: right;
  border-radius:10px;
  
}
`



export default Navbar
