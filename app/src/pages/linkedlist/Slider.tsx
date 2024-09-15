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
        <SidebarHeader>Linked List</SidebarHeader>
        <SidebarContent>
        It is this type of data system where individual objects are stored sequentially. Each object within the system has a reference and information for the next object. The last node on the linked list has an identifier for null.<br/>

        The first element linked to the list is known as the "mind" of the list. There are a lot of differences between linked lists and other kinds of data structures. This concerns the allocation of memory, the inside structures of the structure, and the operation carried out on this linked list.<br/>

        Finding an element of a linked list is slow when compared to arrays since the indexing of an array aids in locating the element. The process in the case of a linked list must begin in mind and work through the whole structure until the component you want is found. Contrary to this, the advantage of linked lists would be that the addition or even the removal of elements at the beginning is completed very quickly.<br/> <br/>
         
          <img src="./images/Link_list.jpg" alt="" className='hero-img'/>
          {/* <div>
          Here is the video about Stack.<br/>
          </div>

          <video controls autoPlay loop src="./images/Stack.mp4" ></video> */}

        </SidebarContent>
      </Sidebar>
      
    </AppContainer>
  );
}

export default App;