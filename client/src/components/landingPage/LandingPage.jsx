import React from "react";
import styles from './LandingPage.module.css';
import { useNavigate } from "react-router-dom";
// import image from "./images/imageFerrari.png";

function MyButton() {
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/home')
    }
    return (
        <button className={styles.button} onClick={handleclick}>
            Go to drive!
        </button>
    );
}

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Drivers</h1>
                < MyButton/>
                {/* <img src={image} alt="car" className={styles.image}></img> */}
            </div>
        </div>
    );
}