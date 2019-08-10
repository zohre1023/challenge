import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ListPage from '../Pages/List';
import Title from '../components/Title';

const Container = () => {
  return ( 
    <div className="container">
      <Title title="Freighthub Frontend Challenge" />
      <Switch>
        <Route path="/listpage" component={ ListPage }></Route>
        <Redirect  to="/listpage" />
      </Switch>  
    </div>
  );
};
 
export default Container;