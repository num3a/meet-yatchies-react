FlowRouter.route('/', {
    name: 'home',
    action() {
        ReactLayout.render(AppLayout, {content: <Home />});
    }
});

FlowRouter.route('/login', {
    name: 'home',
    action() {
        ReactLayout.render(AppLayout, {content: <Login />});
    }
});

FlowRouter.route('/register', {
    name: 'home',
    action() {
        ReactLayout.render(AppLayout, {content: <Register />});
    }
});

FlowRouter.route('/profile', {
    name: 'home',
    action() {
        ReactLayout.render(AppLayout, {content: <Profile />});

    }
});

