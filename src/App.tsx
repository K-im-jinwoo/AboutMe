import React from 'react';
import './App.css';
import { Button, Icon } from './components/atoms';
import './styles/index.css';


function App() {
  return (
    <>
      <Button text='test' className='is-primary'></Button>
      <Icon name='github' size='is-large'></Icon>
    </>
  );
}

export default App;
