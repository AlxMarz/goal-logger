import './App.css';
import BucketList from './components/BucketList';
import Nav from './components/NavTabs';
import { Outlet } from 'react-router-dom';



function App() {



  return (

    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
        <div className="bucket-app">
          <BucketList />
        </div>
      </main>
    </>


  );
}

export default App;
