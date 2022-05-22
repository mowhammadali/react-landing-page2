import React, { Component } from 'react';

import styles from './styles/Header.module.css';

import dataArranging from './assets/images/Data-arranging.svg';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <article>
                    <h1>لورم ایپسوم متن ساختگی</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
                    <div className={styles.buttons}>
                        <button type='text'>لورم ایپسوم</button>
                        <button type='text'>لورم ایپسوم</button>
                    </div>
                </article>
                <div className={styles.picture}>
                    <img src={dataArranging} alt="dataArranging"/>
                </div>
            </div>
        );
    }
}

export
    default
        Header;