import React from 'react';
import blogs from '../data/blogsData';
import BlogCard from './BlogCard';

const FullStack = () => {
  const filteredBlogs = blogs.filter((blog) => blog.domain === "Full Stack Development");
  
  return (
    <div className="container">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default FullStack;