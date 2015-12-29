HomeSearchPanel = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var handle = Meteor.subscribe("harbors.list");

        return {
            harborsList: Harbors.find({}).fetch()
        };
    },

    renderHarborList(){
        return this.data.harborsList.map((item) =>{
            return <option key={item._id} value={item._id}>{item.name}</option>
        });
    },
    render(){
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Harbor</label>
                    <select name="" id="" className="form-control">{this.renderHarborList()}</select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>

            </form>);
    }
});
