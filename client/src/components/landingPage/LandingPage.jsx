import React from "react";
import styles from './LandingPage.module.css';
import { useNavigate } from "react-router-dom";

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
            <h1>Drivers</h1>
            < MyButton/>
        </div>
    );
}