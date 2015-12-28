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
           return <li><a className="btn btn-default" href="/sign-in">Sign In</a></li>;
        }
    },
    render(){
        return (<nav className="navbar navbar-default navbar-fixed-top hidden-xs">
            <div className="container">
                <ul className="nav navbar-nav">
                    {this.renderNavBarItems()}
                    {this.renderNavBarProfileItem()}
                </ul>
            </div>
        </nav>);
    }
});