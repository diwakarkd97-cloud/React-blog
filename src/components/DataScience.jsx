import React from 'react';
import blogs from '../data/blogsData';
import BlogCard from './BlogCard';

const DataScience = () => {
  const filteredBlogs = blogs.filter((blog) => blog.domain === "Data Science");

  return (
    <div className="container">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default DataScience;