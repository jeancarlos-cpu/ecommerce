import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';


const App = () => {

  const [state, setState] = useState({
    currentUser: null,
  });

  let unsubscribeFromAuth = () => null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot => {
          setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        setState({ currentUser: userAuth });
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header currentUser={state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
