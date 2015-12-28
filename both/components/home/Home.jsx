Home = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        // This is the place to subscribe to any data you need
        var handle = Meteor.subscribe("yatchs.list");

        return {
            yatchListLoading : ! handle.ready(),
            yatchList: Yatchs.find({}).fetch()
        };
    },
    renderSearchPanel(){
        return (<HomeSearchPanel />);
    },
    renderYatchList(){

        return this.data.yatchList.map((yatch) => {
            return  <YatchCard key={yatch._id} yatch={yatch}/>
        });

    },
    render(){
        if (this.data.todoListLoading) {
            return (<LoadingSpinner />);
        }
        return (<div className="container">
            <div className="row">

                <div className="col-lg-3">
                    {this.renderSearchPanel()}
                </div>
                <div className="col-lg-9">
                    {this.renderYatchList()}
                </div>
            </div>
        </div>);
    }
});