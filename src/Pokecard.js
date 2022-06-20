import React, { Component } from 'react';
import './Pokecard.css'

// const pokemon_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const fancy_img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

class Pokecard extends Component {





    render() {

        function padToThree(number) {
            if (number <= 999) {
                return `00${number}`.slice(-3);
            }
            else {
                return number;
            }
        }

        // let imgSrc = `${pokemon_img}${this.props.id}.png`;
        let fancyImgSrc = `${fancy_img}${padToThree(this.props.id)}.png`;

        return (
            <div className='pokecard'>
                <p className='pokecard-title'>{this.props.name}</p>
                <div className='pokecard-img'>
                    <img src={fancyImgSrc} />
                </div>
                <div className='pokecard-data'>
                    <p>{this.props.type}</p>
                    <p>{this.props.exp}</p>
                </div>

            </div>
        )
    }
}

export default Pokecard;