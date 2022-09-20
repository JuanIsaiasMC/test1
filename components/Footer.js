import styles from '../styles/Footer.module.css'
export default function Footer({ navText, idioma }) {
    return (
        <footer className={styles.footer__container}>
            <div className={styles.footer__title}>
                <span className={styles.footer__span}>{navText?.[`${idioma}`]?.footer.copy}</span>
            </div>
            <div className={styles.privacity__container}>
                {navText?.[`${idioma}`]?.footer.links.map(item => (
                    <span className={styles.footer__span}>{item.tittle}</span>
                ))}
            </div>
        </footer>
    )
}