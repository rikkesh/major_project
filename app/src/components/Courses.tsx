import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  return (
    <Course>
      <div className='sort'>
        <div className="image-container">
          <div className="container-course">
            <img src="./images/sorting.png" alt="Sorting Algorithm" className="hover-image" />
            <div className="middle">
              <div className="text">
                <button onClick={() => navigate("/sorting")}>Sorting Algorithm</button>
              </div>
            </div>
          </div>
          <div className="container-course">
            <img src="./images/premitive.png" alt="Primitive Algorithm" className="hover-image" />
            <div className="middle">
              <div className="text">
                <button onClick={() => navigate("/Primitive")}>Primitive Algorithm</button>
              </div>
            </div>
          </div>
          <div className="container-course">
            <img src="./images/hero.jpg" alt="Tree Algorithm" className="hover-image" />
            <div className="middle">
              <div className="text">Tree Algorithm</div>
            </div>
          </div>
        </div>
      </div>
    </Course>
  );
};

const Course = styled.section`
  .sort {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    margin: 0;
  }

  .image-container {
    display: flex;
    object-fit:contain;
    gap: 80px;
  }

  .hover-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    transition: transform 0.3s ease;
  }

  .hover-image:hover {
    transform: scale(1.1);
  }

  .container-course {
    position: relative;
    width: 100%;
    max-width: 200px;
  }

  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .container:hover .image {
    opacity: 0.1;
  }

  .container-course:hover .middle {
    opacity: 0.7;
  }

  .text {
    background-color: #04aa6d;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }

  @media (max-width: 768px) {
    .sort {
      height: auto;
      padding: 20px;
    }

    .image-container {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .container-course {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .text {
      font-size: 14px;
      padding: 12px 24px;
    }

    .container {
      max-width: 100%;
    }
  }
`;

export default Courses;
