import '../imports/collections';
import { Resolutions} from '../imports/collections';

Meteor.publish('allResolutions', function(){
  return Resolutions.find();
});

Meteor.publish('userResolutions', function(){
  return Resolutions.find({ user: this.userId });
});