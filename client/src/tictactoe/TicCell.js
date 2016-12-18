import React from 'react';

export default function (injected) {
    const eventRouter = injected('eventRouter');
    const commandPort = injected('commandPort');
    const generateUUID = injected('generateUUID');

    class TicCell extends React.Component {
        constructor() {
            super();
            this.state = {
              location: undefined,
              value: undefined,
              gameId: undefined
            }

            this.placeMove = this.placeMove.bind(this);
        }

        componentWillMount(){
          this.setState({
              gameId: this.props.gameId
          });
          var placement = this.props.coordinates.x + this.props.coordinates.y*3;
          this.setState({
              location: placement
          });
          const movePlaced = (movePlaced)=>{
                if(movePlaced.placement === this.state.location) {
                  if(movePlaced.gameId === this.state.gameId){
                      this.setState({ value: movePlaced.side});
                  }
                }
          };
          eventRouter.on('MovePlaced', movePlaced);

        }

        placeMove(){
            var cmdId = generateUUID()
            var timeStamp = new Date().getTime();
            var placement = this.props.coordinates.y*3 + this.props.coordinates.x;

            commandPort.routeMessage({
                commandId:cmdId,
                gameId: this.props.gameId,
                type:"PlaceMove",
                timeStamp:timeStamp,
                placement: placement,
                side: this.props.mySide
            });
        }

        render() {
            return <div className="ticcell" onClick={(this.placeMove)} >
                {this.state.value}
            </div>
        }

    }
    return TicCell;
}
