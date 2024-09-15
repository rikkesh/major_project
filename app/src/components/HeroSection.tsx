import React from 'react'
import styled from 'styled-components';
import Courses from './Courses';
const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className='hero-top-data'> AlgoViz </p>
          <h1 className='hero-heading'>A place where you can learn and visualize Data Structure & Algorithm</h1>
          <p className='hero para'>Start learning algorithm here where you understand quickly and easily.</p>

        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/hero.jpg" alt="" className='hero-img'/>
          </picture>

        </div>
      </div>

      <div className="">

      
      </div>
      
    </Wrapper>

  
      
   
  )
};
const Wrapper= styled.section`  padding: 9rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.hero-top-data {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.helper};
}

.hero-heading {
  text-transform: uppercase;
  font-size: 5rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}

.section-hero-image {
  display: flex;
  
  
  align-items: center;
 
}

picture {
  text-align: center;
  
}

.hero-img {
  max-width: 80%;

}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
} 
`;

export default HeroSection