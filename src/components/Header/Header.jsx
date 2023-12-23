import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src='https://img.freepik.com/premium-vector/snake-logo-design-template_10250-5820.jpg?w=2000' alt="snake" />
        </header>
    );
};

export default Header;