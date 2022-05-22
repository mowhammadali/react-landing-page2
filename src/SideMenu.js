import React, { Component } from 'react';

import styles from './styles/SideMenu.module.css';

class SideMenu extends Component {

    transform1 = {transform: "translateX(100%)" , transition: "transform 0.8s"};
    transform2 = {transform: "translateX(0%)" , transition: "transform 0.8s"};

    render() {

        const {check , clickHandler} = this.props;

        return (
            <div className={styles.sidemenu} style={check ? this.transform1 : this.transform2}>
                <div className={styles.closearea}>
                    <i className="bi bi-x-lg" onClick={clickHandler}></i>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>صفحه اصلی</li>
                        <li>محصولات</li>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export
    default
        SideMenu;