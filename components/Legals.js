import { useSelector } from 'react-redux'
import styles from '../styles/Legals.module.css'
export default function Legals() {
    const navText = useSelector(state => state.navbar)
    const language = useSelector(state => state.language)
    return (
        <article className={styles.legals__container}>
            <p className={styles.legals__text}>{navText?.[`${language}`]?.legals}</p>
        </article>
    )
}