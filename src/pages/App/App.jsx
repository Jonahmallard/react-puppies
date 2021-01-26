import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../services/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import * as puppyAPI from '../../services/puppies-api';
import PuppyListPage from '../PuppyListPage/PuppyListPage';
import AddPuppyPage from '../AddPuppyPage/AddPuppyPage';
import PuppyDetailPage from '../PuppyDetailPage/PuppyDetailPage';
import EditPuppyPage from '../EditPuppyPage/EditPuppyPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([]);

    useEffect(() => {
      async function getPuppies() {
        const puppies = await puppyAPI.getAll();
        setPuppies(puppies) 
      }
      getPuppies();
    }, [])

    async function handleAddPuppy(newPuppyData) {
      const newPuppy = await puppyAPI.create(newPuppyData);
      setPuppies([...puppies, newPuppy]);
    }

    const history = useHistory();

    useEffect(() => {
      history.push('/')
    }, [puppies, history])

    async function handleUpdatePuppy(updatedPuppyData) {
      const updatedPuppy = await puppyAPI.update(updatedPuppyData);
      const newPuppyArray = puppies.map(puppy => puppy._id === updatedPuppy._id ? updatedPuppy : puppy)
      setPuppies(newPuppyArray);
    }

    async function handleDeletePuppy(puppyID) {
      await puppyAPI.deleteOne(puppyID);
      setPuppies(puppies.filter(puppy => puppy._id !== puppyID))
    }

  return (
    <main className="App">
      { user ?
      <>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path='/' render={() => 
            <PuppyListPage puppies={puppies} handleDeletePuppy={handleDeletePuppy} />
        } />
        <Route exact path='/add' render={() => 
            <AddPuppyPage handleAddPuppy={handleAddPuppy} /> 
        } />
        <Route exact path='/details' render={() => 
            <PuppyDetailPage /> 
        } />
        <Route exact path="/edit">
            <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy} />
        </Route>
        <Redirect to="/" />
      </Switch>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
    </main>
  );
}
