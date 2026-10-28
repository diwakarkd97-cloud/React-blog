import React from 'react';
import blogs from '../data/blogsData';
import BlogCard from './BlogCard';

const CyberSecurity = () => {
  const filteredBlogs = blogs.filter((blog) => blog.domain === "Cyber Security");

  return (
    <div className="container">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default CyberSecurity;