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
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contacts">Contact</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/TestYourself">Quiz</NavLink>
          </li>
          <div>
            {userId ? (
              <div className="navbar-link">
                <UserButton />
              </div>
            ) : (
              <div>
                <li>
                  <Link className="navbar-link" href="/sign-in">SignIn</Link>
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
    background-color: #324ab2;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .navbar-list {
      flex-direction: row;
      gap: 2.4rem;
      align-items: flex-start;
    }

    .login {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .navbar-list {
      gap: 1.6rem;

      .navbar-link {
        font-size: 1.4rem;
      }
    }

    .login {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
`;
