App = React.createClass({
    render(){
        return <div>
            <Header />
            {this.props.content}
            <Footer />
        </div>
    }
});