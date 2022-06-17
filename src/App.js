import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import Favourites from './pages/Favourites';

function App() {
  return (
    <div>
     <Route path='/' >
      <AllMeetup />
     </Route>
     <Route path='/new-meetup' >
      <NewMeetup />
     </Route>
     <Route path='/favourites' >
      <Favourites />
     </Route>
    </div>
  );
}

export default App;
