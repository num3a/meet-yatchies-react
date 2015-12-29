ContentProfile = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
    },
    test(){
        const currentUser = this.data.currentUser;
        if(!currentUser){
            FlowRouter.go('home');
        }



    },
    render(){
        return (<div className="my-content-profile">
            <h3>{this.data.currentUser.profile.firstName} {this.data.currentUser.profile.lastName}</h3>
            <h4>{this.data.currentUser.profile.jobTitle}</h4>
            <span><i className="fa fa-map-marker"></i>{this.data.currentUser.profile.location}</span>
        </div>);
    }
});