import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import SinglePost from './Pages/SinglePost';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddPost from './Pages/AddPost';
import PostList from './Pages/PostList';
import About from './Pages/About';

function App() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* NavBar */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* BreadCrumbs*/}
      {/* Introduction */}
      {/* Posts*/}
    </div>
  );
}

export default App;
