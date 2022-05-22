import React, { Component } from 'react';

import styles from './styles/Card.module.css';

class Card extends Component {
    render() {

        const {svg , margin , heading} = this.props;
        
        return (
            <div className={styles.card} style={margin}>
                <i className={svg}></i>
                <h1>{heading}</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            </div>
        );
    }
}

export
    default
        Card;