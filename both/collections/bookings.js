Bookings = new Mongo.Collection('bookings');
Bookings.attachSchema(new SimpleSchema({
    title: {type : String, optional: false},
    description : {type : String, optional: false},
    creationDate : {type: Date,
        autoValue: function () {
           return new Date();
        }},
    activity : {type : String, optional : false},
    date: { type: Date , optional: false},
    /*
    coachId: {type : String,
        autoValue: function () {
        if (this.isInsert) {
            return Meteor.userId();
        } else {
            this.unset();
        }
    }},
    */
    durationInMinutes : { type: Number , optional: false},
    price : { type: Number , optional: false, min : 5, max : 30},
    maxParticipant : {type : Number, optional : false},
    city: { type: String, optional: false }
}));