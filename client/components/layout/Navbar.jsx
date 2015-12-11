NavBar = React.createClass({

    getLinks(){
        let links = [
            {
                title : 'Home',
                route : ''
            },
            {
                title : 'Profile',
                route : ''
            }];
        return links.map((link) => {
            return <li>
                <a href="">
                    {link.title}
                </a>
            </li>
        });
    },
    render(){
        return <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <ul className="nav navbar-nav">
                    {this.getLinks()}
                </ul>
            </div>
        </nav>
    }
});