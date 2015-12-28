Meteor.publish("harbors.list", function () {
    return Harbors.find({});
});