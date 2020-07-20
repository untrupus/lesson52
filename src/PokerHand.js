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
        let res = 0;
        arr.sort(function (a, b) {
            if (a.rank === b.rank) {
                res++
            }
        });

        switch (res) {
            case 1:
                return 'one pair';
                break;
            case 2:
                return 'three of a kind';
                break;
            case 3:
                return 'two pairs';
                break;
            default:
                return 'no match';
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