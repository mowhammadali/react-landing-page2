import React , {Component} from 'react';

import SideMenu from './SideMenu';

import styles from "./styles/Navbar.module.css"

class Navbar extends Component{

    constructor(){
        super();
        this.state = {
            check: true,
        }
    }

    changeToFalse = () =>{
        this.setState({
            check: false
        })
    }

    changeToTrue = () =>{
        this.setState({
            check: true,
        })
    }

    render(){
        return (
            <>
                <div className={styles.navbar}>
                    <a href='@'>moradkhani.mohammadali@gmail.com</a>
                    <ul>
                        <li>صفحه اصلی</li>
                        <li>محصولات</li>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                    </ul>
                    <div className={styles.hambergermenu}>
                        <i className="bi bi-list" onClick={this.changeToFalse}></i>
                    </div>
                </div>
                <SideMenu clickHandler={this.changeToTrue} check={this.state.check}/>
            </>
        );
    }
};

export 
    default 
        Navbar;