import { useSelector } from 'react-redux'
import styles from '../styles/Footer.module.css'

export default function Footer() {


    const navText = useSelector(state => state.navbar)
    const language = useSelector(state => state.language)
    return (
        <footer className={styles.footer__container}>
            <div className={styles.footer__title}>
                <span className={styles.footer__span}>{navText?.[`${language}`]?.footer.copy}</span>
            </div>
            <div className={styles.privacity__container}>
                {navText?.[`${language}`]?.footer.links.map(item => (
                    <span className={styles.footer__span}>{item.tittle}</span>
                ))}
            </div>
        </footer>
    )
}