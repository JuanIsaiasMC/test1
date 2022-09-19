

export default function WebContent({ navText, idioma }) {
    return (
        <section>
            <article>
                <h1>{navText?.[`${idioma}`]?.header.h1}</h1>
                <h2>{navText?.[`${idioma}`]?.header.discount}</h2>
                <p>{navText?.[`${idioma}`]?.header.paragraphs}</p>
            </article>
        </section>
    )
}