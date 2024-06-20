
import React from 'react'
import styled from 'styled-components' 
import { useNavigate } from 'react-router-dom';


const Primitive = () => {
  
  const navigate = useNavigate()
  return (
    <Premitive>

<div className='container'>
      <ul>
        <li>
          <div className='info'>
            <span className='title'> Stack </span>
            <p>
            Stack is a linear data structure that can be implemented by both static and dynamic data structure. Stack is an ordere collection of data items into which new item may be inserted and from which existing item may be deleted from only one end. Thus, a stack maintains Last-in First-out (LIFO) sequence of elements. 
            </p>
          </div>
          <button className='btn' onClick={()=>navigate("/stack")}>Learn More about Stack Visually</button>
        </li>
        <li>
          <div className='info'>
            <span className='title'> Queue </span>
            <p>
            Queue is a linear data structure that can be implemented in both static and dynamic data structures. Queue is an ordered collection of data items in which data item is inserted from one end and data item is deleted from another end. The end from which data item is inserted is known as rear end and the end from which data item is deleted is known as front end. The first data item that is inserted into a queue is the first element to be removed. For this reason a queue is considered as FIFO (First-in First-out) list.

            </p>
          </div>
          <button className='btn' onClick={()=>navigate("/stack")}>Learn More about Queue Visually</button>
        </li>
        <li>
          <div className='info'>
            <span className='title'> Linked List </span>
            <p>
            An array allocates memory for all its elements grouped together as one block of memory. In contrast, a linked list allocates space for each element separately in its own block of memory called a linked list element or a node. A linked list is an ordered collection or a series of data items with each item, containing a pointer giving a location of the next element in the list. A linked list consists of sequence of nodes connected by links but eh nodes in the linked list are not stored contiguously in the computer’s memory. Memory for each node can be allocated dynamically whenever the need arises. So, the no. of items in the list is only limited by the computer’s memory.

            </p>
          </div>
          <button className='btn' onClick={()=>navigate("/stack")}>Learn More about Linked List Visually</button>
        </li>
        <li>
          <div className='info'>
            <span className='title'> Doubly Linked List </span>
            <p>
            A doubly linked list is a data structure consisting of nodes, where each node contains three parts: a data element, a reference to the next node, and a reference to the previous node. This bidirectional linkage allows traversal in both forward and backward directions.


            </p>
          </div>
          <button className='btn' onClick={()=>navigate("/stack")}>Learn More about Doubly Linked List Visually</button>
        </li>
        <li>
          <div className='info'>
            <span className='title'> Dequeue </span>
            <p>
            A deque (short for "double-ended queue") is an abstract data structure that allows insertion and removal of elements from both the front and the back. It can be considered a hybrid between a stack and a queue, offering the flexibility to operate as either or both.
            Types of Dequeue are Input-Restricted Dequeue and Output-Restricted Dequeue.
            </p>
          </div>
          <button className='btn' onClick={()=>navigate("/stack")}>Learn More about Dequeue</button>
        </li>
      </ul>
      </div>
    </Premitive>
  )
}

export default Primitive




const Premitive = styled.section`
.container{
 
  margin:0;
  background:#fefefe;
  color:black;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left: 80px;
  
  width:100%;
  

  }
  .btn{
  box-shadow: 0 0 15px rgb(166, 126, 253);
  background:#E7DECC;
  color:black;
  width:300px;
  height:40px;
  align-self:center;
  font-weight:bold;
  border:none;
  cursor:pointer;
  }
  ul{
  list-style:none;
  

  margin:0;
  width:100%;
  }
  li{
  border: 1px soldid rgba(218,218, 218, 0.24);
  padding:3rem;
  cursor:pointer;
  display:flex;
  justify-content: space-between;
  transition:background-color 0.3s ease;
  
  }
  li p{
  max-width:400px;
  }
  li:hover{
  background: rgb(166, 126, 253);
  }
  li:hover .btn{
  background: rgb(226, 234, 254);
  color:black;
  }
  .info{
  display: flex;
  flex-direction:column;
  }
  .title{
  font-size:1.5rem;
  font-weight:bold;
  }

`
