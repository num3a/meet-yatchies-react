NavBar = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState() {
        return {
        }
    },
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
    },

    links : [
        {
            title : 'Home',
            route : '/'
        },
        {
            title : 'Profile',
            route : '/profile'
        },
        {
            title : 'Settings',
            route :'/settings'
        }],

    renderNavBarItems() {
        return this.links.map((item) => {
            return <NavBarItem key={item.title} title={item.title} route={item.route} />;
        });
    },
    renderNavBarProfileItem(){
        const currentUserId = this.data.currentUser && this.data.currentUser._id;

        if( currentUserId){
            return <NavBarProfileItem key={this.data.currentUser._id} currentUser={this.data.currentUser} />;
        }
        else
        {
           return <AccountsUIWrapper />;
        }
    },
    render(){
        return <nav className="navbar navbar-default">
            <div className="container">
                <ul className="nav navbar-nav">
                    {this.renderNavBarItems()}
                    {this.renderNavBarProfileItem()}
                </ul>
            </div>
        </nav>
    }
});