import './App.css';
import BucketList from './components/BucketList';
import Navbar from './components/Navbar';
import {useState} from 'react';
import Calendar from 'react-calendar'; 

function App() {
  const [date, setDate] = useState(new Date())

  
  return (
    
    <div className="bucket-app">
      <Navbar/>
      <BucketList />
    </div>
    
  );
}

export default App;
