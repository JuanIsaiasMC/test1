import { useSelector } from 'react-redux'
import styles from '../styles/WebContent.module.css'


export default function WebContent() {

    const navText = useSelector(state => state.navbar)
    const language = useSelector(state => state.language)
    return (
        <section className={styles.text__container}>
            <h1 className={styles.title}>{navText?.[`${language}`]?.header.h1.toUpperCase()}</h1>
            <div className={styles.text__description}>
                <h2 className={styles.porcent}>{navText?.[`${language}`]?.header.discount}</h2>
                <p className={styles.paragraph}>{navText?.[`${language}`]?.header.paragraphs}</p>
            </div>

        </section>
    )
}