import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';

export default function Navbar() {
  const { userId } = useAuth();

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
          {userId && (
            <li>
              <NavLink className='navbar-link' to="/TestYourself">Test Yourself</NavLink>
            </li>
          )}
          <li>
            <NavLink className='navbar-link' to="/contacts">Contact</NavLink>
          </li>
          <div>
            {userId ? (
              <ProfileContainer>
                <UserButton />
              </ProfileContainer>
            ) : (
              <div>
                <li>
                  <Link className='navbar-link' href='/sign-in'>
                    SignIn
                  </Link>
                </li>
              </div>
            )}
          </div>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    position: relative; /* Ensure the profile container is positioned correctly */
  
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
    border-radius: 10px;
  }

  /* Add media queries to make the navbar responsive */
  @media (max-width: 768px) {
    .navbar-list {
      flex-direction: column; /* Stack items vertically on smaller screens */
      gap: 2rem;
    }

    .navbar-link {
      font-size: 1.6rem; /* Adjust font size for smaller screens */
    }

    .login {
      font-size: 14px;
      padding: 10px 24px;
    }
  }

  @media (max-width: 480px) {
    .navbar-list {
      gap: 1.6rem;
    }

    .navbar-link {
      font-size: 1.4rem; /* Smaller font size for extra small screens */
    }

    .login {
      font-size: 12px;
      padding: 8px 20px;
    }
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .clerk-user-button {
    width: 60px;  /* Adjust the width as needed */
    height: 60px; /* Adjust the height as needed */
    font-size: 2rem; /* Adjust font size if necessary */
    border-radius: 50%;
    
    /* If the UserButton component has a class you need to target */
    .clerk-user-button-inner {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;
