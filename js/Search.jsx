import React, {Component} from 'react'
import Pokemon from './Pokemon.jsx'

export default class Search extends Component{
    state = {
        name : "",
        results : [],
    }
    handleNameChange = event => {
        this.setState({
            name : event.target.value,
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        const searchResult = this.props.pokemons.filter((pokemon) => {
            return pokemon.name === this.state.name.toLowerCase();
        });
        this.setState({
            results : searchResult
        });
    }
    render(){
        const {results} = this.state;
        const pokemon = results[0] || {};
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={this.state.name}
                            placeholder="Search Pokemon by name..."
                            onChange={this.handleNameChange}/>
                            <button type='submit'>Search</button>
                    </label>
                </form>
                {pokemon.name && <Pokemon key={pokemon.name} name={pokemon.name} details={pokemon}/>}
                {!pokemon.name && <p>Not found / no results</p>}
          </div>
        )
    }
}
