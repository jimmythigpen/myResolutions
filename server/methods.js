import { Resolutions } from '../imports/collections';

Meteor.methods({
  addResolution(resolution) {
    check(resolution, String)
    if (!Meteor.userId()) {
      throw new Meteor.Error('Not-Allowed')
    }
     Resolutions.insert({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId(),
    });
  },

  toggleResolution(resolution) {
    check(resolution, Object)
    if (Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('Not-Allowed')
    }
    Resolutions.update(resolution._id, {
      $set: {complete: !resolution.complete}
    })
  },

   deleteResolution(resolution) {
    check(resolution, Object)
    if (Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('Not-Allowed')
    }
    Resolutions.remove(resolution._id);
  },
});