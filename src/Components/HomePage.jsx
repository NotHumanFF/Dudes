import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Qs from 'qs';
import { io } from 'socket.io-client';
import './HomePage.css'

import CookieAlert from './CookieAlert'


const HomePage = () => {

  const socket = io('wss://reactchat-production-f378.up.railway.app/', { transports: ['websocket'] });
    const navigate=useNavigate();
    const location=useLocation();
    const [formData, setFormData] = useState({
        username: '',
        room: ''
    });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`chat?username=${formData.username}&room=${formData.room}`);
    }

   



    
  return (
    <div>
 <div className="w-screen h-screen flex justify-center items-center">
  <div className="centered-form__box rounded-lg bg-[#2B2D31]">
    <h1 className='text-[2rem]'>Join</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4 ">
        <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 mr-2"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <label className="mr-2">Display name</label>
        </div>
        <input
          className='input input-bordered w-full max-w-xs'
          type="text"
          name="username"
          placeholder="Enter name"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>

        <label className="mr-2">Room Id</label>
        </div>
        <input
          className='input input-bordered w-full max-w-xs'
          type="text"
          name="room"
          placeholder="Room Id"
          value={formData.room}
          onChange={handleChange}
          required
        />
      </div>
      <button className='w-full cursor-pointer btn btn-accent btn-secondary disabled:cursor-default disabled:bg-[#00B29F]'>Join</button>
    </form>
  </div>
</div>


   
  <CookieAlert/>



</div>
  )
}

export default HomePage