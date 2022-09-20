import styles from '../styles/Prefooter.module.css'
export default function Prefooter({ navText, idioma }) {
    return (
        <section className={styles.prefooter__container}>
            <article
                className={styles.prefooter__icons}>
                <i className={`fa-brands fa-facebook-f ${styles.icon}`}></i>
                <i className={`fa-brands fa-twitter ${styles.icon}`}></i>
                <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
            </article>
            <article className={styles.prefooter__texts}>
                <h3 className={styles.contact__title}>{navText[`${idioma}`]?.prefooter.contactCenter.title}</h3>
                <p className={styles.contact__email}>{navText[`${idioma}`]?.prefooter.contactCenter.email}</p>
            </article>
            <article className={styles.numbers__container}>
                <div className={styles.number__container}>
                    <span>
                        {navText[`${idioma}`]?.prefooter.numbers[0].name}
                    </span>
                    <span>
                        {navText[`${idioma}`]?.prefooter.numbers[0].number}
                    </span>
                </div>
                <div className={styles.number__container}>
                    <span>
                        {navText[`${idioma}`]?.prefooter.numbers[1].name}
                    </span>
                    <span>
                        {navText[`${idioma}`]?.prefooter.numbers[1].number}
                    </span>
                </div>
                <div>
                    <select name="resto del mundo" className={styles.numbers__select}>
                        {navText[`${idioma}`]?.prefooter.numbers.slice(2).map(item => (
                            <option value="">{item.name}
                                {item.number}</option>
                        ))}
                    </select>
                </div>

            </article>
        </section>
    )
}