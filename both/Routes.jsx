FlowRouter.route('/', {
    name: 'home',
    action() {
        ReactLayout.render(AppLayout, {content: <Home />});
    }
});
/*
FlowRouter.route('/login', {
    name: 'login',
    action() {
        ReactLayout.render(AppLayout, {content: <Login />});
    }
}); */

FlowRouter.route('/register', {
    name: 'register',
    action() {
        ReactLayout.render(AppLayout, {content: <Register />});
    }
});

FlowRouter.route('/profile', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'profile',
    action() {
        ReactLayout.render(AppLayout, {content: <Profile />});

    }
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
        ReactLayout.render(AppLayout, {content : <NotFound />});
    }
};
