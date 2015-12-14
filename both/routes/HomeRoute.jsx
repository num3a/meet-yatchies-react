FlowRouter.route('/', {
    name: 'home',
    action() {
        ReactLayout.render(AppLayout, {content: <Home />});
    }
});