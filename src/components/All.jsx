import React from 'react';
import blogs from '../data/blogsData';
import BlogCard from './BlogCard';

const All = () => {
  return (
    <div className="container">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default All;