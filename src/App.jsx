import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase.utils'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';

import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';

const App = ({setCurrentUser}) => {

  // const [state, setState] = useState({
  //   currentUser: null,
  // });

  // let unsubscribeFromAuth = () => null;

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
        setCurrentUser({ currentUser: userAuth });
    });

    // return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
