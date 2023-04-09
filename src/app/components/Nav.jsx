import Image from 'next/image'
import style  from '../css/Nav.module.css'
export default function Nav (){
    
    return(
        <nav className={style.container} >
            <p style={{fontFamily:' Poor Story',fontSize:'3.5rem'}}>Logo</p>
            <ul>
                <li>Empresa</li>
                <li>Servicios</li>
                <li>Trabajá con nosotros</li>
                <li><button className={style.contact_btn}>Contactanos</button></li>
            </ul>
            <div className={style.menu_btn}>
                <Image
                priority
                src='/assets/burguer1.png'
                alt='icon of burguer button'
                width={80}
                height={80}
                />

            </div>
        </nav>
    )
}