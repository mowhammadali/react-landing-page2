import React, { Component } from 'react';

import styles from './styles/Menu.module.css';

class Menu extends Component {
    render() {

        const {heading , list1 , list2 , list3 , list4} = this.props;

        return (
            <div className={styles.menu}>
                <h4>{heading}</h4>
                <ul>
                    <li><a href='@'>{list1}</a></li>
                    <li><a href='@'>{list2}</a></li>
                    <li><a href='@'>{list3}</a></li>
                    <li><a href='@'>{list4}</a></li>
                </ul>
            </div>
        );
    }
}

export
    default
        Menu;