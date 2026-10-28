import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogsData';
import Header from './Header';

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <>
      <div className="sticky-wrapper">
        <Header /> 
      </div>
      
      <div className="blog-container">
        
        
        <div className="blog-image-side">
          <img src={blog.img} alt={blog.title} />
        </div>
        
        
        <div className="blog-content-side">
          <h1>{blog.title}</h1>
          <p className="domain-tag">{blog.domain}</p>
          <p className="date-tag">Feb 02, 2024</p>
          <p className="content-text">{blog.content}</p>
          <button>Read More</button>
        </div>

      </div>
    </>
  );
};

export default Blog;