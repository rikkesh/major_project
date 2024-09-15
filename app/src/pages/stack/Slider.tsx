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
  width: ${props => (props.isOpen ? '500px' : '0')};
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
        <SidebarHeader>Stack</SidebarHeader>
        <SidebarContent>
          The stack is a different type of structure in that components within the data system adhere to the principles in LIFO- Last in, First out or FILO- First In, Last Out. Two kinds of operations can be attributed to the stack, i.e., the pushing and pop operation. Push is necessary for components that need to be added to the collection, and pop is employed when the component previously added needs to be removed from the collection. The extraction can be removed to add the final component.
         
          <img src="./images/stack.jpg" alt="" className='hero-img'/>
          <div>
          Here is the video about Stack.
          </div>

          <video controls autoPlay loop src="./images/Stack.mp4" ></video>

        </SidebarContent>
      </Sidebar>
      
    </AppContainer>
  );
}

export default App;