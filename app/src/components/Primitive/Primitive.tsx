import React from 'react'
import styled from 'styled-components';
import Button from './Button';

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className='hero-top-data'> AlgoViz </p>
          <h1 className='hero-heading'>Linear Data Structure</h1>
          <p className='hero para'>
          A linear data structure is known as a data structure that allows data elements to be arranged in a sequential or linear fashion. Each element is attached with its next and previous adjacent. A linear data structure only has one level and performs linear searching in the data structure. We can therefore traverse all elements in a single run. Because computer memory is linearly arranged, linear data structures are simple to implement. Linear data structure examples are array, linked list, stack, queue, etc.</p>

        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/Primitive1.png" alt="" className='hero-img'/>
          </picture>

        </div>
      </div>

      <div className="">
      <Button/>
      
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
  max-width: 70%;
  border-radius: 40px;

}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
} 
`;

export default HeroSection
