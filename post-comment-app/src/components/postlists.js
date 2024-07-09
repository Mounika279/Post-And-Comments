import React from 'react';
import {useState} from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './newpost';
import Login from './login';
const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);


  return (
    <div className='main'>
        <NewPost/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{color:"darkolivegreen",fontWeight:"bolder",fontSize:"x-large"}}>ID</th>
            <th style={{color:"darkolivegreen",fontWeight:"bolder",fontSize:"x-large"}}>Title</th>
            <th style={{color:"darkolivegreen",fontWeight:"bolder",fontSize:"x-large"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td style={{color:'darkblue'}}>{post.id}</td>
              <td>
               <h5><Link style={{ textDecoration: 'none', color: 'magneta' }} to={`/posts/${post.id}`}>{post.title}</Link></h5> 
              </td>
              <td>
                <Link to={`/comments/${post.id}`}>
                  <Button variant="info">See Comments</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PostList;
