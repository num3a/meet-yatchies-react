YatchCard = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        yatch: React.PropTypes.object.isRequired
    },
    getRandomImageGuy(){
        var imagePath = '/images/people/110/guy-' + _.random(1,9) + '.jpg';
        return imagePath;
    },
    render(){
       return   (<div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="card-block">
                        <h4 className="card-title">{this.props.yatch.title}</h4>
                        <img className="card-img-top img-rounded" src={this.getRandomImageGuy()} alt="Card image cap"/>
                        <p className="card-text">{this.props.yatch.description}</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>);
    }
});