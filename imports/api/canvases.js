import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import shortid from 'shortid'
 
export const Canvases = new Mongo.Collection('canvases');

if (Meteor.isServer) {
  Meteor.publish('canvas', function (canvasId) {
    return Canvases.find({_id: canvasId});
  });
}

Meteor.methods({
  
  'canvases.insert' (name) {
    check(name, String);
    return Canvases.insert({
      _id: shortid.generate(),
      name: name,
      createdAt: new Date(),
      points: []
    })
  },

  'canvases.markPoint' (id, point) {
    return Canvases.update({_id: id }, { $push: { points: point } }, err => {
      return err
    })
  },

  'canvases.clear' (id) {
    return Canvases.update({
      _id: id
    }, { $set: { points: [] }})
  }

})

