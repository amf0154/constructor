import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/home/Home';
import Create from './components/create/Create';
import Sites from './components/sites/Sites';
import Site from './components/site/Site';
import store from './store';
store.subscribe(()=>{
 // localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// console.log(store.getState())
});
function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Switch>
      <Provider store={store}>
      <Route path='/' component={Home} />
      <Route path='/create' component={Create} />
      <Route path='/sites' component={Sites} />
      <Route path='/site/:id' component={Site} />
      </Provider>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
