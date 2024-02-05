import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';


const BlogPage = () => {
    const location = useLocation();
    const daten = location.state && location.state.data;
  
    return (
      <div>
        <h2>Seite 2</h2>
        {daten && <p>Übergebene Daten: {JSON.stringify(daten)}</p>}
      </div>
    );
  };
  
  export default BlogPage;