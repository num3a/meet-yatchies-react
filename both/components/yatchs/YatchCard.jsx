YatchCard = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        yatch: React.PropTypes.object.isRequired
    },
    render(){
       return   (<div className="card">
                    <img className="card-img-top" data-src="..." alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.yatch.title}</h4>
                        <p className="card-text">{this.props.yatch.description}</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>);
    }
});