/**
 * Created by emmanuelernest on 20/12/2015.
 */
Meteor.publish("yatchs.list", function () {
    return Yatchs.find({});
});