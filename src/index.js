import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from './components/header/NvigationBar'
import HomePage from './components/home/page';
import BlogPage from './components/blog/page';
import ErrorPage from './components/miscellaneous/404';
import './resources/home.css';

function Index() {
  return (
    <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Index;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);