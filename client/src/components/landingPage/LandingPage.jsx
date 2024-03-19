import React from "react";
import styles from './LandingPage.module.css';
import { useNavigate } from "react-router-dom";

function MyButton() {
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/home')
    }
    return (
        <button className={`${styles.button} ${styles.shake}`} onClick={handleclick}>
            Go to drive!
        </button>
    );
}

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={`${styles.title} ${styles.titleEffect}`}>Drivers Formula 1</h1>
                < MyButton/>
            </div>
        </div>
    );
}