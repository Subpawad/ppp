import { useState } from 'react'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'

import './App.css'

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id='main'>
      <div className='leftPort'>
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Jakkrit Jaroentham (Note)">
          <h3>Student</h3>
        </Title>

        <Title title='name'>
          <h3>Jakkrit Jaroentham (Note)</h3>
        </Title>
        <Title title='contact'>
          <p style={{ display: hide ? "none" : "block" }}>
            Tel :+66644475341
          </p>
          <button onClick={() => setHide(!hide)}>Hide</button>
          <p>Email : s64122202062@ssru.ac.th</p>

          <Title title='Education'>
            <p>Suan Sunandha Rajabhat University</p>
          </Title>
        </Title>

      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Lorem ipsum dolor 
            sit amet consectetur adipisicing 
            elit. Ratione earum in suscipit accusantium id ut facilis quas tempore, sed necessitatibus consectetur hic velit. Provident fuga pariatur nisi quibusdam alias laboriosam.</p>
        </Title>
        <Title title="Work Experience">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas assumenda consectetur minima fugit et qui eveniet deleniti aliquid libero maxime, blanditiis, quasi harum nisi similique voluptatem. Similique dolores porro quod.</p>
        </Title>
        <Title title="Skills">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, minima distinctio. Magni molestias dolore qui quos voluptatibus explicabo cum repellat nihil mollitia doloribus harum totam ad, molestiae eveniet voluptatum obcaecati.</p>
        </Title>
      </div>


    </main>
  )
}

export default App