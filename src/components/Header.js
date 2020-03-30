import React, {Component} from 'react';
import Menu from './Menu';
class Header extends Component {    
    render(){
        return (
            <header className="site_header">             
                <Menu />
            </header>        
        );
    }
}
export default Header;
