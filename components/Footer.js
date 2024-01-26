import React from 'react';
import styles from './css/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    <p>&copy; 2023 Veldkamp Solutions. All rights reserved.</p>
                </div>
                <div className={styles.contact}>
                    <p>veldkampsolutions@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
