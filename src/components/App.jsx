import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from './Header.jsx';
import Sex from './Sex.jsx';

class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Sex} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default App;