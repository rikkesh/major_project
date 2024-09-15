import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  return (
    <Course>
      <div className="sort">
        <div className="image-container">
          <div className="container">
            <img src="./images/sorting.png" alt="Sorting Algorithm" className="hover-image" />
            <div className="middle">
              <div className="text">
                <button onClick={() => navigate("/sorting")}>Sorting Algorithm</button>
              </div>
            </div>
          </div>
          <div className="container">
            <img src="./images/premitive.png" alt="Primitive Algorithm" className="hover-image" />
            <div className="middle">
              <div className="text">
                <button onClick={() => navigate("/Primitive")}> Linear Data Structure</button>
              </div>
            </div>
          </div>
          <div className="container">
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
    height: 50vh;
    margin: 0;
  }

  .image-container {
    display: flex;
    gap: 300px; /* Gap between images */
  }

  .hover-image {
    width: 200px;
    height: 200px;
    transition: transform 0.3s ease;
  }

  .hover-image:hover {
    transform: scale(1.1);
  }

  .container {
    position: relative;
    width: 200px; /* Fixed width for containers */
    height: 200px; /* Fixed height for containers */
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: #04aa6d;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .sort {
      height: auto;
    }
    
    .image-container {
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }

    .hover-image {
      width: 150px;
      height: 150px;
    }

    .container {
      width: 150px;
      height: 150px;
    }

    .text {
      font-size: 14px;
      padding: 12px 24px;
    }
  }

  @media (max-width: 480px) {
    .hover-image {
      width: 100px;
      height: 100px;
    }

    .container {
      width: 100px;
      height: 100px;
    }

    .text {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
`;

export default Courses;
