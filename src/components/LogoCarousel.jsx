import { useState } from 'react'
import { Boton } from './../components/Boton'
import { BoxLogo } from './../components/BoxLogo'

import logo from './../assets/img/logo.png'

export const LogoCarousel = () => { 
    const [activated, setActivated] = useState(0)

    // Se podrían pushear, modificar o eliminar las imágenes según el índice, 
    // y seguiría funcionando correctamente sin la necesidad de cambiar el algoritmo del sistema.
    const images = [logo, logo, logo, logo] 

    
    if (activated === images.length) { 
        setActivated(0)
    } 

    if (activated === -1) { 
        setActivated(images.length - 1)
    } 

    return ( 
        <div className="contenedor">
            <Boton setActivated={setActivated} activated={activated} instruccion={false}>⇐</Boton>

            {images.map((element, index) => { 
                return <BoxLogo key={index} srcImg={element} id={index} actived={activated} />
            })}

            <Boton setActivated={setActivated} activated={activated} instruccion={true}>⇒</Boton>
        </div>
    )

}