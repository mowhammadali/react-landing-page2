import React, { Component } from 'react';

import styles from './styles/Services.module.css';

import payment from './assets/images/payment.svg'
import logo1 from "./assets/images/social media/img_6.svg";
import logo2 from "./assets/images/social media/img_7.svg";
import logo3 from "./assets/images/social media/img_8.svg";
import logo4 from "./assets/images/social media/img_9.svg";
import logo5 from "./assets/images/social media/img_10.svg";
import logo6 from "./assets/images/social media/img_11.svg";

class Services extends Component {
    render() {
        return (
            <div className={styles.services}>
                <div className={styles.text}>
                    <h2>لورم ایپسوم متن ساختگی</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                </div>
                <div className={styles.form}>
                    <form>
                        <span>ایمیل</span>
                        <input type="text"/> 
                        <span>متن پیام</span>
                        <textarea></textarea>
                        <button>لورم ایپسوم</button>
                    </form>
                    <img src={payment} alt=''/>
                </div>
                <div className={styles.logos}>
                    <img src={logo1} alt="logo"/>
                    <img src={logo2} alt="logo"/>
                    <img src={logo3} alt="logo"/>
                    <img src={logo4} alt="logo"/>
                    <img src={logo5} alt="logo"/>
                    <img src={logo6} alt="logo"/>
                </div>
            </div>
        );
    }
}

export
    default 
        Services;