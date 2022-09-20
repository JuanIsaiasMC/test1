import { useState } from "react"
import styles from '../styles/Products.module.css'
import Image from "next/image"
import PopUp from "./PopUP"

export default function Products({ navText, idioma }) {
    const [isOpen, setIsopen] = useState(false)
    const [currentImg, setCurrentImg] = useState(0)
    const imgLength = navText?.[`${idioma}`]?.carousel?.mobile.length

    const nextImg = () => {
        setCurrentImg(currentImg === imgLength - 1 ? 0 : currentImg + 1)
    }

    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? imgLength - 1 : currentImg - 1)
    }

    return (
        <div className={styles.section}>
            <figure className={styles.figure__container}>
                {navText?.[`${idioma}`]?.carousel?.mobile.map((item, index) => {
                    return (
                        <div className={styles.test}>{
                            index === currentImg && (
                                < img className={styles.img__slide} key={item.alt} src={item.src} alt={item.alt} />
                            )
                        }
                        </div>
                    )
                })}
                <div className={styles.buttons__container}>
                    <button className={styles.button__slide} onClick={prevImg}><i className={`${styles.icon__slide} fa-solid fa-angle-left`}></i></button>
                    <button className={styles.button__slide} onClick={nextImg}><i className={`${styles.icon__slide} fa-solid fa-angle-right`}></i></button>
                </div>
            </figure >

            {/* <div className={styles.promo__container}> */}
            {navText[`${idioma}`]?.promotions.map(item => (
                <div className={styles.promo__container}>
                    <Image width={100} height={150} className={styles.img__promo} src='/xarte.png' alt="logoPromo" />
                    <h2>{item.title}</h2>
                    <h3>{item.Subtitle}</h3>
                    <p>{item.paragraphs}</p>
                    <button className={styles.button__product} onClick={() => setIsopen(true)}>{item.button.text}</button>
                </div>
            ))}
            {/* </div> */}
            {isOpen ? <PopUp setIsopen={setIsopen} /> : ''}
        </div >
    )
}