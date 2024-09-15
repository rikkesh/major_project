import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="button-container">
        <button className='attractive-button button1' onClick={() => navigate("/stack")}>Stack</button>
        <button className='attractive-button button2' onClick={() => navigate("/queue")}>Queue</button>
        <button className='attractive-button button3' onClick={() => navigate("/linked_list")}>Linked List</button>
        <button className='attractive-button button4' onClick={() => navigate("/dequeue")}>Dequeue</button>
      </div>
    </Wrapper>
  );
};

const pulsate = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const Wrapper = styled.section`
  .button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 50px;
  }

  .attractive-button {
    border: none;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    font-size: 18px;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    flex: 1 1 calc(33.33% - 40px); /* 3 buttons per row */
    max-width: calc(33.33% - 40px); /* 3 buttons per row */
    background-size: 200% 200%;
    animation: ${gradientShift} 5s ease infinite;
  }

  .attractive-button:hover {
    animation: ${pulsate} 1s ease infinite;
  }

  .attractive-button:active {
    transform: scale(0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .button1 {
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
  }

  .button1:hover {
    background: linear-gradient(135deg, #feb47b, #ff7e5f);
  }

  .button2 {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
  }

  .button2:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
  }

  .button3 {
    background: linear-gradient(135deg, #43cea2, #185a9d);
  }

  .button3:hover {
    background: linear-gradient(135deg, #185a9d, #43cea2);
  }

  .button4 {
    background: linear-gradient(135deg, #ff512f, #dd2476);
  }

  .button4:hover {
    background: linear-gradient(135deg, #dd2476, #ff512f);
  }

  .button5 {
    background: linear-gradient(135deg, #ffaf7b, #d76d77);
  }

  .button5:hover {
    background: linear-gradient(135deg, #d76d77, #ffaf7b);
  }

  .button6 {
    background: linear-gradient(135deg, #2193b0, #6dd5ed);
  }

  .button6:hover {
    background: linear-gradient(135deg, #6dd5ed, #2193b0);
  }
`;

export default Button;
