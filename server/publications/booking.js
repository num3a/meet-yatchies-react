Meteor.publish('bookings.all', function(){
  return Bookings.find({});
});

Meteor.publish('bookings.byId', function(bookingId){
  return Bookings.find({_id:bookingId});
});

Meteor.publish('bookings.byLocation', function(location){
  throw new Meteor.Error('not-implemented',  'The method has not been implemented');
});

Meteor.publish('bookings.byCoach', function(coachId){
  Bookings.find({'coachId':coachId});
});

Meteor.publish('bookings.byParticipants', function(participantId){
  Bookings.find({'participantId':participantId});
});
