AppLayout = React.createClass({
    render(){
        return <div>
            <Header />
            <div className="container my-content">
                {this.props.content}
            </div>
            <Footer />
        </div>
    }
});