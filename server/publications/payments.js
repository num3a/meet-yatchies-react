Meteor.publish('payments.allByUserId', function(userId){
  Payments.find({'userId':userId});
});
