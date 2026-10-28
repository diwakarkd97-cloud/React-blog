# React Tech Blog Application

A responsive, multi-page tech blog application built with React and Vite. This project demonstrates dynamic routing, component-based architecture, and responsive CSS design without the use of external UI libraries.

## Features

* **Dynamic Routing:** Built with `react-router-dom` to navigate seamlessly between category pages (Full Stack, Data Science, Cyber Security, AI) without page reloads.
* **Dynamic Data Rendering:** Utilizes the JavaScript `.map()` function to dynamically render `BlogCard` components from a central mock data file.
* **URL Parameter Extraction:** Uses `useParams` to fetch and display specific blog content based on the clicked card's ID.
* **Fully Responsive Design:** Custom CSS media queries ensure the layout adapts perfectly across Desktop, Tablet (992px/768px), and Mobile (576px) screens.
* **Sticky Navigation:** Features a custom `.sticky-wrapper` that keeps the Header and Navigation bar at the top of the screen during scrolling.
* **Custom 404 Page:** Includes a fallback error component to handle unknown routes.

## Tech Stack

* **Framework:** React 19 (via Vite)
* **Routing:** React Router DOM (v7)
* **Styling:** Vanilla CSS (Flexbox, Media Queries)
* **Typography:** Open Sans (Google Fonts)

## Project Structure

```text
src/
 ├── components/
 │    ├── Ai.jsx
 │    ├── All.jsx
 │    ├── Blog.jsx
 │    ├── BlogCard.jsx
 │    ├── CyberSecurity.jsx
 │    ├── DataScience.jsx
 │    ├── Error.jsx
 │    ├── FullStack.jsx
 │    ├── Header.jsx
 │    ├── NavBar.jsx
 │    └── Template.jsx
 ├── data/
 │    └── blogsData.js
 ├── App.css
 ├── App.jsx
 ├── index.css
 └── main.jsx
