import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { ImageProfile } from './component/ImageProfile';
import { Title } from './component/Title';


function App() {
  const {hide , setHide} = useState(false)

  return (
    <main id='main'>
      <div className='leftPort'>
        <ImageProfile image="https://i.pinimg.com/564x/10/c3/7e/10c37e8cc44f1049ad574f4562477e44.jpg" />

        <Title title="Subpawad Sardsanga (Job)">
          <h3>Student</h3>
        </Title>

        <div className='name'>
          <h2>Subpawad Sardsanga (Job)</h2>
        </div>
        
        <Title title='contact'>
          <p>
            Tel :+66644475341
          </p>
          <p>Email : s64122202062@ssru.ac.th</p>

        </Title>
        <div className='education'>

        </div>
      </div>

      <div className="rightPort">
        <div className="profile">

        </div>
        <div className="workEx">

        </div>
        <div className="skills">

        </div>
      </div>


    </main>
  )
}

export default App

