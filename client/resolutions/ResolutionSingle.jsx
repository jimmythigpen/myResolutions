import React, { Component } from 'react';

export default class ResolutionSingle extends Component {

  toggleChecked() {
    Meteor.call('toggleResolution', this.props.resolution);
  }

  deleteResolution() {
    Meteor.call('deleteResolution', this.props.resolution);
  }


  render() {
    const isComplete = this.props.resolution.complete;
    const resolutionClass = isComplete ? 'checked' : '';
    const status = isComplete ? <span className='completed'>Completed</span> : '';

    return (
      <li className={resolutionClass}>
        <input type="checkbox"
            readOnly={true}
            checked={this.props.resolution.complete}
            onClick={this.toggleChecked.bind(this)} />
        {this.props.resolution.text}
        {status}
        <button className="btn-cancel"
          onClick={this.deleteResolution.bind(this)}>
          &times;
        </button>
      </li>
    )
  }
}
