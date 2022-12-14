import './App.css';
import React from 'react'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

const App = ()=>{
  return (
    <>
    <div className='app-cont'>
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
    </div>
      
    </>
    
  )

}

export default App;
