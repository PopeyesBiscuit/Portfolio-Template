import React from 'react';
import styles from './css/Nav.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

const Nav = () => {

    const router = useRouter()



    return (
        <div className={styles.navContainer}>
            <h1 onClick={() => { router.push('/') }}>Your Logo</h1>
            <ul>
                <li>
                    {/* add nav items */}
                </li>
            </ul>
        </div>
    );
};

export default Nav;