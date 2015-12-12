Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('render-meet-yatchies'));
});
