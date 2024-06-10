// LoginForm.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importe o componente Link
import './TelaLogin.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário submetido:', { email, password });
    // Redirecionar para a página principal após o login
    navigate('/main');
  };

  return (
    <div>
      <div className='background'>
        <img src="https://imgur.com/iqIiCIt.jpg" alt="" />
      </div>
      <div className='logo'>
        <img src="https://imgur.com/a3dzQjV.png" alt="" />
      </div>
      <div className="login-form">
        <h2 style={{ textAlign: "center", color: "white" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" style={{ color: "white" }}>E-mail:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={handleChange} 
              required 
              style={{ color: "white" }} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: "white" }}>Senha:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={handleChange} 
              required 
              style={{ color: "white" }} 
            />
          </div>
          <div className="form-group" style={{ textAlign: "center" }}>
            <button type="submit">Entrar</button>
          </div>
          <div className="form-group" style={{ textAlign: "center" }}>
           
            <Link to="/cadastro" style={{ color: "white", textDecoration: "none" }}>
              <button type='submit'>Cadastrar</button>
              
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

