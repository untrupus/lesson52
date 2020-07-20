import React, {Component} from 'react';
import './App.css';
import './assets/cards.css';
import Card from './Card/Card';
import PokerHand from "./PokerHand";

class App extends Component {
    constructor(props) {
        super(props);
        this.cardDeck = () => {
            const suits = [{suit: 'diams', icon: '♦'},
                {suit: 'hearts', icon: '♥'},
                {suit: 'spades', icon: '♠'},
                {suit: 'clubs', icon: '♣'},
            ];
            const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a',];
            const staightDeck = []
            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < ranks.length; j++) {
                    let card = {rank: ranks[j], suit: suits[i].suit, icon: suits[i].icon};
                    staightDeck.push(card);
                }
            }
            return staightDeck;
        }
        this.state = {
            cardDeck: this.cardDeck(),

        }
    }

    newDeck = () => {
        const shuffleDeck = this.state.cardDeck.sort(() => Math.random() - 0.5);
        const cards = [];
        for (let i = 0; i < 5; i++) {
            cards.push(shuffleDeck[i]);
        }
        this.setState({
            cardDeck: shuffleDeck,
        })
    }

    render() {
        const deck = [];

        for (let i = 0; i < 5; i++) {
            deck.push(
                <Card
                    suit={this.state.cardDeck[i].suit}
                    icon={this.state.cardDeck[i].icon}
                    rank={this.state.cardDeck[i].rank}
                />
            )
        }

        return (
            <div className="playingCards faceImages">
                <PokerHand
                    cards={this.state.cardDeck}
                />
                {deck}
                <button onClick={this.newDeck} className="btn">play</button>
            </div>
        );
    }
}


export default App;
