Profile = React.createClass({
    render(){
        return (<div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <AvatarProfile />
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <ContentProfile />
            </div>
        </div>);
    }
});