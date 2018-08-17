import React from 'react';
import ReactDOM from 'react-dom';
import "../source/stylesheet/stylesheet_scss.scss"
import {DescriptionView} from "./javascript/descriptionView.jsx"
import {OperationsView} from "./javascript/operationsView.jsx"

class ContainerClass extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sDisplayMessage: props.sDefaultMessage,
      bSpinStatus: false,
    };
    this.getInitialState = this.getInitialState.bind(this);
    this.handleChangeMessageCallback = this.handleChangeMessageCallback.bind(this);
    this.handleSpinActionCallback = this.handleSpinActionCallback.bind(this);
  };

  getInitialState () {
    this.setState({sDisplayMessage: this.props.sDefaultMessage});
  }

  componentDidUpdate () {
    if (this.state.sDisplayMessage === "") {
      this.getInitialState();
    }
  }

  handleChangeMessageCallback (oEvent) {
    this.setState({sDisplayMessage: oEvent.target.value});
  }

  handleSpinActionCallback () {
    this.setState({bSpinStatus: !this.state.bSpinStatus});
  }

  render () {
    let sButtonLabel = this.state.bSpinStatus ? "Stop Spinning Logo" : "Start Spinning Logo";
    return (
        <div id="form">
          <DescriptionView sDisplayMessage={this.state.sDisplayMessage} bSpinStatus={this.state.bSpinStatus}/>
          <OperationsView fChangeMessageCallback={this.handleChangeMessageCallback.bind(this)}
                          fSpinActionCallback={this.handleSpinActionCallback.bind(this)}
                          sButtonLabel={sButtonLabel}/>
        </div>
    );
  }
}

ReactDOM.render(
    <ContainerClass sDefaultMessage={"Hello World In ReactJS"}/>,
    document.getElementById('container')
);