import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
`;

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = styled.div<SidebarProps>`
  height: 100%;
  width: ${props => (props.isOpen ? '600px' : '0')};
  position: fixed;
  top: 0;
  right: 0;
  background-color: #f9f9f9;
  border-left: 2px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

const SidebarHeader = styled.h2`
  padding: 10px 15px;
  text-align: center;
  margin-top: 0;
`;

const SidebarContent = styled.p`
  padding: 10px 15px;
  line-height: 1.5;
`;

const OpenButton = styled.button`
  position: absolute;
  top: 110px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 15px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 5px;
`;

const Content = styled.div`
  padding: 20px;
`;

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.getElementById('mySidebar');
    const openButton = document.querySelector('.open-btn');

    if (sidebar && openButton && event.target !== sidebar && event.target !== openButton) {
      closeSidebar();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <AppContainer>
      <OpenButton className="open-btn" onClick={openSidebar}>Learn More</OpenButton>
      <Sidebar id="mySidebar" isOpen={isOpen}>
        <SidebarHeader>Queue</SidebarHeader>
        <SidebarContent>
        A queue is a data structure that stores elements in a First In, First Out (FIFO) order, meaning the first element added is the first to be removed. This contrasts with a stack, where the most recently added element is removed first. In a queue, elements are added with the enqueue operation and removed with the dequeue operation, involving both ends of the structure for data addition and removal.



         
          <img src="./images/queue.jpg" alt="" className='hero-img'/>
          <div>
          Here is the video about Queue.
          </div>

          <video controls autoPlay loop src="./images/Queue.mp4" ></video>

        </SidebarContent>
      </Sidebar>
      
    </AppContainer>
  );
}

export default App;