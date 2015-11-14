Template.bookingsShow.created = function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('bookings.byId', Router.current().params._id);
    }.bind(this));
};

Template.bookingsShow.rendered = function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    }.bind(this));
};

Template.bookingsShow.helpers({
    booking: function () {
        return Bookings.findOne({_id: Router.current().params._id});
    }
});
