import React, { Component } from 'react';

import Menu from './Menu';

import styles from './styles/Footer.module.css';

class Footer extends Component {

    constructor(){
        super();
        this.state = {
            instagram: "bi bi-instagram",
            telegram: "bi bi-telegram",
            meta: "bi bi-meta",
            linkedin: "bi bi-linkedin"
        }
    }

    render() {

        const {instagram , telegram , meta , linkedin} = this.state;

        return (
            <div className={styles.footer}>
                <div className={styles.socialmedia}>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    <div className={styles.logos}>
                        <i className={instagram}></i>
                        <i className={telegram}></i>
                        <i className={meta}></i>
                        <i className={linkedin}></i>
                    </div>
                </div>
                <div className={styles.menues}>
                    <Menu heading = "بخش های وب سایت" list1 = "صفحه اصلی" list2 = "محصولات" list3 = "گالری" list4 = "پشتیبانی" />
                    <Menu heading = "محصولات" list1 = "محصول یک" list2 = "محصول دو" list3 = "محصول سه" list4 = "محصول چهار" />
                    <Menu heading = "درباره ما" list1 = "درباه ما" list2 = "تماس با ما" list3 = "" list4 = "" />
                </div>
            </div>
        );
    }
}

export
    default
        Footer;