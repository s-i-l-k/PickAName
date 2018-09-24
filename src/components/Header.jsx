import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div className='home'>HOME</div>
                <div className='title'>Wybierz imię dla swojego dziecka</div>
            </div>
        )
    }
}

export default Header;