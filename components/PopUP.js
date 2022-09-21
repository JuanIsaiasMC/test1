import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '../styles/PopUp.module.css'


export default function PopUp({ setIsopen }) {
    const [reserva, setReserva] = useState(0)

    useEffect(() => {
        const reserveNumber = setReserva(Math.floor(Math.random() * 32546) + 1)

    }, [])

    return (
        <div className={styles.popup__container}>
            <h2 className={styles.popup__title}>Tu reserva esta lista</h2>
            <p className={styles.popup__p}>Tu numero de reserva es:</p>
            <span className={styles.popup__span}>{reserva}</span>
            <Link href='/thankYou'>

                <button className={styles.popup__button} onClick={() => setIsopen(false)} >continue</button>
            </Link>
        </div>
    )
}