NavBarItem = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        title: React.PropTypes.string.isRequired,
        route: React.PropTypes.string.isRequired,
        iconName: React.PropTypes.string.isRequired
    },
    getIconClass (){
        var className = 'fa ' + this.props.iconName + ' visible-xs';
        return className
    },
    render(){
        return <li>
            <a href={this.props.route}>
                <span className="hidden-xs">{this.props.title}</span>
                <i className={this.getIconClass()}></i>
            </a>
        </li>;
    }
});