import Image from 'next/image'
import style from '../css/Home.module.css'
export default function () {

    return (

        <div className={style.container}>
            <header className={style.title}>
                <h1>
                    Titulo de ejemplo <br/>frase o slogan de <br />la
                    <span
                        style={{ color: '#5B73E6' }}
                    > empresa</span>
                </h1>
                <p>Breve descripción de los servicios que puede contratar
                    la persona que visita la página.</p>
            </header>

            <div className={style.imageBox}>
                <Image
                  alt='generic illustration for company '
                  src='/assets/generic.png'
                  fill
                  sizes='responsive'
                />
            </div>
        </div>

    )
}