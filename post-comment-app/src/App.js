import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModalPage from './components/modalpage';
import PostList from './components/postlists';
import CommentsPage from './components/postwithcomments';
import Login from './components/login';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" element={<Login />} />
          <Route path="/postlist" element={<PostList />} /> 
          <Route path="/comments/:postId" element={<CommentsPage />} />
          <Route path="/posts/:postId" element={<ModalPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
