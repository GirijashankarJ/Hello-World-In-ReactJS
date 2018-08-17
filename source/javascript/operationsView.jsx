import React from 'react';

export class OperationsView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <div className="operationsView">
          <input className="messageInputBox" placeholder="Type Here To Change Text"
                 onChange={this.props.fChangeMessageCallback}/>
          <button className="spinTransitionButton" onClick={this.props.fSpinActionCallback}>{this.props.sButtonLabel}</button>
        </div>
    );
  }
}