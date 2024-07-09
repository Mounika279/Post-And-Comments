
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.phone === phoneNo && user.email === email);
        if (user) {
          navigate('/postlist'); 
        } else {
          setError('No user found');
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Phone Number:</label>
          <input type="text" id="phone" value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)} required/>
        </div> 
          <label >Email:</label>
          <input type="email" id="email" value={email}
            onChange={(e) => setEmail(e.target.value)}  required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
