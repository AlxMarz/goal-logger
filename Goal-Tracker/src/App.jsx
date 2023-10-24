import './App.css';
// import BucketList from './components/BucketList';
import Nav from './components/NavTabs';
import { Outlet } from 'react-router-dom';
import StopWatch from './components/StopWatch';




function App() {



  return (

    <>
      
      <main className="mx-3">
        <Nav />
        <Outlet />
        {/* <div className="bucket-app">
          <BucketList />
        </div> */}
      </main>
      {/* <div className="App">
            <StopWatch />
        </div> */}
    </>


  );
}

export default App;
