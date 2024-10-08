'use client'
import React from 'react'
import Home from "./Home"
import About from "./About"
import Contact from './Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle'
import Sorting from './Sorting'
import Features from './Features'
import Primitive from './components/Primitive/Primitive'
import TestYourself from './TestYourself'
import StackComponent from './pages/stack'
import QueueComponent from './pages/queue'
import LinkedListComponent from './pages/linkedlist'
import Dequeue from './pages/dequeue'
import BinarySearchTreeComponent from './pages/BinaryTree'
import Button from './components/quiz/Button'
import LinearQuiz from './components/quiz/Pre'
import SortQuiz from './components/quiz/Sort'
import TreeQuiz from "./components/quiz/Treee"

import Mix from './components/quiz/Mix'




const Main = () => {
  const theme={
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },


  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
  < BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}    />
    <Route path="/about" element={<About/>}    />
    <Route path="/sorting" element={<Sorting/>}    />
    <Route path="/contact" element={<Contact/>}    />
    <Route path="/Primitive" element={<Primitive/>}    />
    <Route path="/stack" element={<StackComponent/>}    />
    <Route path="/queue" element={<QueueComponent/>}    />
    <Route path="/linked_list" element={<LinkedListComponent/>}    />
    <Route path="/dequeue" element={<Dequeue/>}    />

    <Route path="/TestYourself" element={<TestYourself/>}    />
    <Route path="/button" element={<Button/>}    />
    <Route path="/primitivequiz" element={<LinearQuiz/>}    />
    <Route path="/sortquiz" element={<SortQuiz/>}    />
    <Route path="/treequiz" element={<TreeQuiz/>}    />
    <Route path="/combinequiz" element={<Mix/>}    />






    <Route path="/tree" element={<BinarySearchTreeComponent/>}    />
    
  </Routes>
  <Footer/>
 </BrowserRouter>
  </ThemeProvider>
  )
}

export default Main
