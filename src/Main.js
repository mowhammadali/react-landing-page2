import React, { Component } from 'react';

import Cards from './Cards';

import styles from './styles/Main.module.css';

class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                <article>
                    <i className="bi bi-grid-1x2"></i>
                    <h2>لورم ایپسوم متن ساختگی</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    <button>لورم ایپسوم</button>
                </article>
                <Cards />
            </div>
        );
    }
}

export
    default 
        Main;