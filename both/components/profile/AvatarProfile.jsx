AvatarProfile = React.createClass({
    getRandomImageGuy(){
        var imagePath = '/images/people/110/guy-' + _.random(1,9) + '.jpg';
        return imagePath;
    },
    render(){
        return (<div>
            <img src={this.getRandomImageGuy()} alt="..." className="img-thumbnail" />
        </div>);
    }
});