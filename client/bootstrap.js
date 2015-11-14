Meteor.startup(function(){
    //$('body').addClass('pushable');
    Session.set('location', Geolocation.latLng());
    SPTY.Payments.log();
});

var getUserLanguage = function () {
    var defaultLanguage = Session.get('language');

    return defaultLanguage || 'en';
};

if (Meteor.isClient) {
    Meteor.startup(function () {
        TAPi18n.setLanguage(getUserLanguage())
            .done(function () {
            })
            .fail(function (error_message) {
                // Handle the situation
                console.log(error_message);
            });
    });
}