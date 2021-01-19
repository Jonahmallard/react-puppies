import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      { user ?
      <>
      <NavBar />
      <Switch>
        <Route path="/orders/new">
          <NewOrderPage />
        </Route>
        <Route path="/orders">
          <OrderHistoryPage />
        </Route>
        <Redirect to="/orders" />
      </Switch>
      </>
      :
      <AuthPage />
    }
    </main>
  );
}
