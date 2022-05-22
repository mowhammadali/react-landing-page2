import React, { Component } from 'react';

import Card from './Card';

import styles from './styles/Cards.module.css';

class Cards extends Component {

    margin = {marginTop: "40px"};
    heading = "لورم ایپسوم ساختگی";

    render() {
        return (
            <div className={styles.cards}>
                <Card svg = "bi bi-router-fill" margin={this.margin} heading={this.heading}/>
                <Card svg = "bi bi-cpu-fill" heading={this.heading}/>
                <Card svg = "bi bi-image-fill" margin={this.margin} heading={this.heading}/>
                <Card svg = "bi bi-steam" heading={this.heading}/>
            </div>
        );
    }
}

export
    default
        Cards;