import React, {Component} from 'react';
import Header from './Header.jsx';
import PokeList from './PokeList.jsx';
require('../scss/main.scss');

export default class App extends Component {
    render() {
        return (
          <div className="wrapper">
              <Header welcomeText={"Welcome to the Pokedex!"}/>
              <PokeList />
          </div>
        )
    }
}
