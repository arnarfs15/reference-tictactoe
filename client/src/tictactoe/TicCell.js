import React from 'react';

export default function (injected) {
    const eventRouter = injected('eventRouter');
    const commandPort = injected('commandPort');
    const generateUUID = injected('generateUUID');

    class TicCell extends React.Component {
        constructor() {
            super();
            this.state = {
                value: ''
            }
        }
        componentWillMount(){
            console.debug("let's do this");
        }
        render() {
            return <div className="ticcell" onClick={this.placeMove}>
                {this.state.value}
            </div>
        }

        placeMove() {
            console.debug("PlaceMove NOW");
        }
    }
    return TicCell;
}
