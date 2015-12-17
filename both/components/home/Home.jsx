Home = React.createClass({
     mixins: [ReactMeteorData],
  getMeteorData() {
    // This is the place to subscribe to any data you need
   // var handle = Meteor.subscribe("todoList", this.props.id);

    return {
     //   yatchListLoading : ! handle.ready(),
        yatchList: Yatchs.find().fetch()[0]
    };
  },
    renderYatchList(){
        
    },
    render(){
           /*if (this.data.todoListLoading) {
                return <LoadingSpinner />;
            }*/
        return <div className="row">
            <YatchCard key={this.data.yatchList._id} yatch={this.data.yatchList} />
        </div>;
    }
});