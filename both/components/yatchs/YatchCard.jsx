YatchCard = React.createClass({
    /*propTypes :  {
        yatch : React.PropTypes.object
    },*/
    render(){
       return   <div className="card">
                    <img className="card-img-top" data-src="..." alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.description}</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                </div>;
    }
});