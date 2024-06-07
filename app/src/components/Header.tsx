import React from 'react'
import { NavLink } from 'react-router-dom'
import AlgoViz from '../assets/AlgoViz.jpg'
import Navbar from './Navbar'
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/AlgoViz.jpg" alt="logo" className='logo'/>
      </NavLink>
      <Navbar/>
    </MainHeader>
    

  )
};
const MainHeader = styled. header`
padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    width:100px;
    cursor: pointer;
    border-radius:20px;
    display: inline-flex;
  }




`

export default Header
