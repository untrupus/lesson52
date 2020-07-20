import React, {Component} from 'react';

class PokerHand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.cards,
        };
    }

    getOutcome = () => {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(this.state.result[i]);
        }

        const newArr = arr.sort((a, b) => {
            return a.rank - b.rank;
        })

        let res = [];

        newArr.sort(function (a, b) {
            if (a.rank === b.rank) {
                res.push(a, b);
            }
        });
        console.log(newArr);
        switch (res.length) {
            case  2:
                return 'one pair';
                break;
            case 3:
                return 'three of a kind';
                break;
            case 4:
                return 'two pairs';
                break;
            default:
                return 'no matches';
                break;
        }
    }

    render() {
        return (
            <h3>Your result: {this.getOutcome()}</h3>
        )
    }
}


export default PokerHand;