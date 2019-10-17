import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors.js';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';

import './App.css';
import 'tachyons'

const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth)
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin'
          render={() => currentUser ?
            (<Redirect to='/' />)
            :
            <SignInPage />
          } />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
