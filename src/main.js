import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Recipes from './recipe_index/Recipes';
import Homepage from './Homepage/homepage';
import NewUser from './usersnew/newuser';
import Show from './recipeshow/show';
import Login from './login/Login';
import AdminShow from './Admin/show';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/users/new" component={NewUser}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/recipes" component={Recipes}/>
          <Route path="/sessions/new" component={Recipes}/>
          <Route path="/recipes/:id" component={Show}/>
          <Route path="/admin" component={AdminShow}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
