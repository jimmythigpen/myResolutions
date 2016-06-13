import React, { Component } from 'react';
import { Resolutions } from '../../imports/collections';

export default class ResolutionsForm extends Component {
  addResolution(event) {
    event.preventDefault();
    const text = this.refs.resolution.value.trim();
    if (text) {
      Meteor.call('addResolution', text, (error, data)=>{
        if (error) {
          Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          this.refs.resolution.value = "";
        }
      });
    }
  }

  render() {
    return (
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        <input type="text" ref="resolution" placeholder="Enter New"/>         
      </form>
    )
  }
}
