import { useState } from "react"
import styles from '../styles/Products.module.css'
import Image from "next/image"
import PopUp from "./PopUP"
import { useSelector } from "react-redux"

export default function Products({ imgLogo, hotel }) {
    const [isOpen, setIsopen] = useState(false)
    const [currentImg, setCurrentImg] = useState(0)

    const navText = useSelector(state => state.navbar)
    const language = useSelector(state => state.language)
    const imgLength = navText?.[`${language}`]?.carousel?.mobile.length

    const nextImg = () => {
        setCurrentImg(currentImg === imgLength - 1 ? 0 : currentImg + 1)
    }

    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? imgLength - 1 : currentImg - 1)
    }

    return (
        <div className={styles.section}>
            <figure className={styles.figure__container}>
                {navText?.[`${language}`]?.carousel?.mobile.map((item, index) => {
                    return (
                        <div key={item.alt} className={styles.slide__container}>{
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

            <div className={styles.promo__info}>
                {
                    navText[`${language}`]?.promotions.map((item, index) => (
                        <div key={index} className={styles.promo__container}>
                            <figure className={styles.logo}>
                                <Image width={100} height={150} className={styles.img__promo} src={imgLogo} alt="logoPromo" />
                            </figure>
                            <h2>{hotel}</h2>
                            <h3>{item.Subtitle}</h3>
                            <p>{item.paragraphs}</p>
                            <button className={styles.button__product} onClick={() => setIsopen(true)}>{item.button.text}</button>
                            {isOpen ? <PopUp setIsopen={setIsopen} /> : ''}
                        </div>
                    ))
                }
            </div>
            {/* {isOpen ? <PopUp setIsopen={setIsopen} /> : ''} */}
        </div >
    )
}