import React from 'react';
import styles from './header.scss';

class Header extends React.Component {
    render() {
        return (
            <header>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
                <p className={styles.paragraph}>With some content</p>
            </header>
        )
    }
}

export default Header;