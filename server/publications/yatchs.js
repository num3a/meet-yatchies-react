Meteor.publish("yatchs.list", function () {
    return Yatchs.find({});
});