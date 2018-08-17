import React from 'react';

export class DescriptionView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let sLogoClassName = "iconSection ";
    let bSpinStatus = this.props.bSpinStatus;
    if (bSpinStatus) {
      sLogoClassName += "spinTransition";
    }
    return (
        <div className="descriptionView">
          <div className={sLogoClassName}></div>
          <div className="messageSection font-family">{this.props.sDisplayMessage}</div>
        </div>
    );
  }
}