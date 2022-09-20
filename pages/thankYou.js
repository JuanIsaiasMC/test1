import logo from '../public/logoXcaret.jpg'
import Image from 'next/image'
import styles from '../styles/ThankYouPage.module.css'
export default function thankYou() {
    return (
        <div className={styles.thankyou__container} >
            <h2 className={styles.thankyou__title}>Thank you for your reservation, you can find this one in your email adrees.</h2>
            <a target={"_blank"} href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser" rel="noopener noreferrer">
                <button className={styles.thankyou__button}>go to my email</button>
            </a>
            <figure className={styles.img__container}>
                <Image className={styles.thankyou__img} src={logo} />
            </figure>
        </div>
    )
}