import React from 'react';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm';
import ResolutionSingle from './ResolutionSingle';
import { Resolutions } from '../../imports/collections';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe('userResolutions')
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();     
  }

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1>My Resolutions - {Session.get('test')}</h1>
        <ResolutionsForm />
        <ReactCSSTransitionGroup
          component="ul"
          className="resolutions"
          transitionName="resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}>
          {this.resolutions().map((resolution, i)=>{
            return <ResolutionSingle key={i} resolution={resolution} />
          })}
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    )
  }
}
