import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

import styles from './app.scss';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Main title</h1>
                <p>Some content</p>
                <Footer />
            </div>
        )
    }
}

export default App;