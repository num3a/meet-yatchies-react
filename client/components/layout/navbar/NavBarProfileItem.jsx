NavBarProfileItem = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        currentUser: React.PropTypes.object
    },
    render(){
        return <li>
            <a>{this.props.currentUser.username}</a>
        </li>;
    }
});