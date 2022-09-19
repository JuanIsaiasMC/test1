import { useState } from "react"
import styles from '../styles/Products.module.css'
import Image from "next/image"




export default function Products({ navText, idioma }) {
    const [currentImg, setCurrentImg] = useState(0)
    const imgLength = navText?.[`${idioma}`]?.carousel?.mobile.length

    const nextImg = () => {
        setCurrentImg(currentImg === imgLength - 1 ? 0 : currentImg + 1)
    }

    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? imgLength - 1 : currentImg - 1)
    }

    return (
        <section className={styles.section}>
            <figure className={styles.figure__container}>
                {navText?.[`${idioma}`]?.carousel?.mobile.map((item, index) => {
                    return (<div>{
                        index === currentImg && (
                            < img className={styles.img__slide} key={item.alt} src={item.src} alt={item.alt} />
                        )
                    }
                    </div>
                    )
                })}
                <div className={styles.buttons__container}>
                    <button onClick={prevImg}>prev</button>
                    <button onClick={nextImg}>next</button>
                </div>

                <div className={styles.promo__container}>
                    {navText[`${idioma}`]?.promotions.map(item => (
                        <div>
                            <img width={30} height={10} layout='responsive' objectFit="contain" className={styles.img__promo} src={item.logoPromo} alt="logoPromo" />
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                            <p>{item.paragraphs}</p>
                            <button>{item.button.text}</button>
                        </div>
                    ))}
                </div>
            </figure>
        </section>
    )
}