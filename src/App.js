import React, { Component } from 'react';

import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import Services from './Services';
import Footer from './Footer';


class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Main />
                <Services />
                <Footer />
            </div>
        );
    }
}

export 
    default 
        App;