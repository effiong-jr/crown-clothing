import React from 'react';
import {Route, Switch} from "react-router-dom";
import {auth} from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import ShopPage from "./pages/shop/shop.component";

import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
      return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
