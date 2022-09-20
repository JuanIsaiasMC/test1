import styles from '../styles/Legals.module.css'
export default function Legals({ navText, idioma }) {

    return (
        <article className={styles.legals__container}>
            <p className={styles.legals__text}>{navText?.[`${idioma}`]?.legals}</p>
        </article>
    )
}