AppLayout = React.createClass({
    render(){
        return <div>
            <header>
                {this.props.nav ||  <NavBar />}
            </header>
            <div className="container my-content">
                {this.props.content}
            </div>
            {this.props.footer || <Footer />}
        </div>
    }
});