import styles from '../styles/WebContent.module.css'

export default function WebContent({ navText, idioma }) {
    return (
        <section className={styles.text__container}>

            <h1 className={styles.title}>{navText?.[`${idioma}`]?.header.h1.toUpperCase()}</h1>
            <h2 className={styles.porcent}>{navText?.[`${idioma}`]?.header.discount}</h2>
            <p className={styles.paragraph}>{navText?.[`${idioma}`]?.header.paragraphs}</p>

        </section>
    )
}