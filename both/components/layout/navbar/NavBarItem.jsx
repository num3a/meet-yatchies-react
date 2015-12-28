NavBarItem = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        title: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired
    },
    render(){
        return <li>
            <a href={this.props.route}>{this.props.title}</a>
        </li>;
    }
});