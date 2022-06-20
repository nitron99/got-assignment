import React, {useState} from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import {users} from './users';
import InputField from '../../components/FormElements/InputField/InputField';
import Button from '../../components/FormElements/Button/Button';

const Data = {email: "", password: ""};

const AuthPage = ({authy}) => {
  const [formData, setFormData] = useState(Data);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setError(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      if(formData.email === users[0].email && formData.password === users[0].password){
        sessionStorage.setItem("user", JSON.stringify({isAuth: true}))
        navigate('/home')
      }else{
        setError(true)
      }
    }, 1000);
    
  }

  return (
    <div className="login-container">
      <div className='login'>
      <h2>LOGO</h2>
        <div className='login-form-container'> 
          <form action="" onSubmit={handleSubmit} className="login-form">
            <InputField 
              label="Email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              />
            <InputField 
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              />
            Email  - admin<br/>
            password - admin
            <Button text="Login" type="submit"/>
            {error && "Invalid Login Credentials.."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthPage