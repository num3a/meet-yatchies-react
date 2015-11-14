Template.bookings.created = function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('bookings.all');
    }.bind(this));
};

Template.bookings.rendered = function(){
    this.autorun(function(){
        if(!this.subscription.ready()){
            IonLoading.show();
        }
        else{
            IonLoading.hide();
        }
    }.bind(this));
};

Template.bookings.helpers({
    bookings: function () {
        return Bookings.find({}, {sort: {createdAt: -1, name: -1}});
    }
});