export default function Products({ promotion, navText, idioma }) {
    return (
        <section>
            <figure>
                <h3>{navText?.[`${idioma}`].carousel?.text}</h3>
                {navText?.[`${idioma}`].carousel?.mobile.map(item => (
                    <img key={item.alt} src={item.src} alt={item.alt} />
                ))}
            </figure>
            <article>


                <img src={promotion.logoPromo} alt="prmotion logo" />
                <h2>{promotion.title}</h2>
                <h3>{promotion.Subtitle}</h3>
                <p>{promotion.paragraphs}</p>
                <button>{promotion.button.text}</button>
            </article>
        </section>
    )
}