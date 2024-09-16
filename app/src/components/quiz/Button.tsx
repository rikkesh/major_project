import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate()
  return (
    <div className='bcolor'>

    <Course>
      <div className='sort'>
      



    <div className="image-container">
    
    <div className="container">
<img src="./images/sort.png" alt="Avatar" className="hover-image"  />
<div className="middle">
<div className="text">
  
<button onClick={()=>navigate("/sortquiz")}>Sorting Quiz</button>

</div>
</div>
<div className='ttext'>Sorting Quiz

              </div>
</div>
<div className="container">
<img src="./images/pre.png" alt="Avatar" className="hover-image" />
<div className="middle">
<div className="text">
<button onClick={()=>navigate("/primitivequiz")}>Linear Quiz</button>
</div>
</div>
<div className='ttext'>Linear Quiz

              </div>
</div>
<div className="container">
            <img src="./images/tree.png" alt="Tree Algorithm" className="hover-image" />
            <div className="middle">
              <div className="text">
                <button onClick={() => navigate("/treequiz")}>Tree Quiz</button>

              </div>
              
            </div>
            <div className='ttext'>Tree Quiz

              </div>
          </div>
<div className="container">
<img src="./images/mix.png" alt="Avatar" className="hover-image" />
<div className="middle">
<div className="text">
<button onClick={()=>navigate("/combinequiz")}>Combine Quiz</button>
</div>
</div>
<div className='ttext'>Combine Quiz

              </div>
</div>
</div>

</div>
</Course>
</div>
)

  
}



const Course = styled.section`
.sort{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin: 0;
}
    .bcolor{
    background-color:grey;
    }

.image-container {
    display: flex;
    gap: 100px; /* Gap between images */
}

.hover-image {

    border-radius:25px;
    width: 200px;
    height: 200px;
    transition: transform 0.3s ease;
}

.hover-image:hover {
    transform: scale(1.1);
}
.container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
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

.container:hover .middle {
  opacity: 0.7;
}

.text {
  background-color: purple;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}

.ttext{
text-align: center;
font-size: 16px;
padding: 10px;
font-weight: bold;
}





` 


export default Courses
